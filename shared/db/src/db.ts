import { atom, type WritableAtom } from "nanostores";
import { type Struct } from "superstruct";
// TODO: figure out a better name for this
import { assign as assignObject, isFunction } from "radash";
import { type ObjectSchema } from "superstruct/dist/utils";
import { createConfig, type BaseConfig, type PartialConfig } from "./config";
import { URL_UPDATE_EVENT, UrlUpdateEventDetail } from "./constants";
import { generateId } from "./utils";

export interface Database<Config extends BaseConfig> {
  mount: () => void;
  update: (
    updates: ((config: Config) => PartialConfig<Config>) | PartialConfig<Config>
  ) => Config;

  config: WritableAtom<Config>;
  url: WritableAtom<URL | undefined>;
  mounted: WritableAtom<boolean>;
}

export function getSessions<Config extends BaseConfig>(
  schema: Struct<Config, ObjectSchema>
) {
  const keys = Object.keys(localStorage);
  const sessions: Config[] = [];

  for (let key of keys) {
    const item = localStorage.getItem(key);

    if (item) {
      sessions.push(createConfig(JSON.parse(item), schema));
    }
  }

  return sessions;
}

export function clearSessions() {
  localStorage.clear();
}

export function createDb<Config extends BaseConfig>(
  schema: Struct<Config, ObjectSchema>,
  options?: {
    params?: PartialConfig<Config>;
    dbId?: string;
    instanceId?: string;
    verbose?: boolean;
  }
): Database<Config> {
  const params: PartialConfig<Config> = options?.params ?? {};
  const dbId = options?.dbId ?? generateId();
  const instanceId = options?.instanceId ?? dbId;
  const mounted = atom(false);
  const emitting = atom(false);
  const config = atom<Config>(
    createConfig({ ...params, id: options?.dbId ?? undefined }, schema)
  );
  const url = atom<URL | undefined>();
  const verbose = options?.verbose ?? false;
  let databaseUpdateChannel: BroadcastChannel | undefined;

  const mount = () => {
    if (typeof document !== "object") {
      return mounted.set(true);
    }

    databaseUpdateChannel = new BroadcastChannel(dbId);

    config.subscribe(async (updatedConfig) => {
      localStorage.setItem(dbId, JSON.stringify(updatedConfig));

      let updatedUrl = url.get();

      if (updatedUrl) {
        updatedUrl = new URL(updatedUrl);
        updatedUrl.search = new URLSearchParams({
          id: dbId,
        }).toString();

        url.set(updatedUrl);
      }
    });

    url.subscribe((updatedUrl) => {
      if (mounted.get() && updatedUrl) {
        window.history.replaceState({}, "", updatedUrl);

        window.dispatchEvent(
          new CustomEvent<UrlUpdateEventDetail>(URL_UPDATE_EVENT, {
            detail: {
              url: updatedUrl.href,
            },
          })
        );
      }
    });

    databaseUpdateChannel.onmessage = async () => {
      if (!emitting.get()) {
        if (verbose) {
          console.log(
            `db: "${instanceId}" received BroadcastChannel update (${dbId})`
          );
        }

        const storedConfig = localStorage.getItem(dbId);

        if (storedConfig) {
          config.set(createConfig(JSON.parse(storedConfig), schema));
        }
      }
    };

    if (mounted.get()) {
      return;
    }

    if (verbose) {
      console.log(`ssr config (${instanceId}): `, params);

      console.log(
        `existing session config (${instanceId}): `,
        JSON.parse(localStorage.getItem(dbId) ?? "{}")
      );

      console.log(
        `refreshed existing session config (${instanceId}): `,
        createConfig(JSON.parse(localStorage.getItem(dbId) ?? "{}"), schema)
      );
    }

    const storedConfig = localStorage.getItem(dbId);
    const updatedConfig = createConfig(
      storedConfig ? JSON.parse(storedConfig) : { id: dbId },
      schema
    );

    config.set(updatedConfig);

    if (verbose) {
      console.log(`updated config (${instanceId}): `, updatedConfig);
    }

    mounted.set(true);
  };

  function update(
    updates:
      | ((config: Config) => PartialConfig<Config>)
      | PartialConfig<Config>,
    emit = true
  ): Config {
    const updatedConfig = createConfig(
      /^true$/i.test(String(params?.reset))
        ? {}
        : assignObject(
            createConfig(config.get() ?? {}, schema),
            isFunction(updates)
              ? updates(config.get() ?? createConfig({}, schema))
              : updates
          ),
      schema
    );

    config.set(updatedConfig);

    if (emit) {
      emitting.set(true);
      databaseUpdateChannel?.postMessage(undefined);
      emitting.set(false);
    }

    return updatedConfig;
  }

  return { mount, update, config, url, mounted };
}
