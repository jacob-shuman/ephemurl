import { get, set } from "idb-keyval";
import { atom } from "nanostores";
import { assign, crush, mapKeys } from "radash";
import { createConfig, type Config } from "./config";
import { URL_UPDATE_EVENT, type UrlUpdateEventDetail } from "./constants";
import type { DeepPartial } from "./utils";

// export function db(params: Record<string, string>) {
export function db(ssrConfig: Config) {
  const mounted = atom(false);
  const url = atom<URL | undefined>();
  const config = atom<Config | undefined>(ssrConfig);

  async function update(updatedConfig: DeepPartial<Config>) {
    // await set(
    //   "config",
    //   assign(createConfig(config.get() ?? {}), updatedConfig)
    // );
    config.set(
      assign(createConfig(config.get() ?? {}), createConfig(updatedConfig))
    );
    // console.log("here");
  }

  function getSearchParams(): URLSearchParams {
    return new URLSearchParams(
      mapKeys(crush({ ...(config.get() ?? {}) }), (k) =>
        String(k).replaceAll(".", "-")
      )
    );
  }

  // async function mount(ssrConfig: Config) {
  async function mount() {
    if (typeof window === "object") {
      url.set(new URL(window.location.href));
      // console.log("saved config: ", await get("config"));
      const updatedConfig = assign(
        createConfig((await get("config")) ?? {}),
        ssrConfig
      );

      config.set(updatedConfig);

      await set("config", updatedConfig);

      mounted.set(true);
    }

    config.subscribe(async (updatedConfig) => {
      // console.log(mounted.get());
      if (mounted.get() && updatedConfig) {
        await set("config", config.get());

        let updatedUrl = url.get();

        if (updatedUrl) {
          updatedUrl = new URL(updatedUrl);
          updatedUrl.search =
            config.get()?.params === "show" ? getSearchParams().toString() : "";

          url.set(updatedUrl);
        }

        // if (updatedUrl && !config.get()?.showParams) {
        //   updatedUrl = new URL(updatedUrl);
        //   updatedUrl.search = "";
        // url.set(updatedUrl);
        // }
      }
    });

    url.subscribe((updatedUrl) => {
      if (mounted.get() && updatedUrl) {
        window.history.pushState({}, "", updatedUrl);

        window.dispatchEvent(
          new CustomEvent<UrlUpdateEventDetail>(URL_UPDATE_EVENT, {
            detail: {
              url: updatedUrl.href,
            },
          })
        );
      }
    });

    mounted.set(true);
    // await update(ssrConfig);
  }

  return {
    mount,
    update,

    config,
    url,
  };
}
