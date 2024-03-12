// import { get, set } from "idb-keyval";
// import { atom, type WritableAtom } from "nanostores";
// import { assign } from "radash";
// import {
//   DATABASE_UPDATE_EVENT,
//   URL_UPDATE_EVENT,
//   type UrlUpdateEventDetail,
// } from "./constants";
// import type { DeepPartial } from "./utils";

// export interface Database<Config, PartialConfig> {
//   mount: () => Promise<void>;
//   update: (updates: DeepPartial<Config> | PartialConfig) => Promise<Config>;

//   config: WritableAtom<Config | undefined>;
//   url: WritableAtom<URL | undefined>;
//   mounted: WritableAtom<boolean>;
// }

// export function db<Config extends object, PartialConfig>(
//   params: Record<string, string | object>,
//   options: {
//     id?: string;
//     createConfig: (config: DeepPartial<Config>) => Config;
//   }
// ): Database<Config, PartialConfig> {
//   const { createConfig } = options;
//   const mounted = atom(false);
//   const emitting = atom(false);
//   const config = atom<Config | undefined>();
//   const url = atom<URL | undefined>();

//   async function update(
//     updates: DeepPartial<Config> | PartialConfig,
//     emit = true
//   ): Promise<Config> {
//     const updatedConfig = createConfig(
//       assign(createConfig(config.get() ?? {}), updates)
//     );

//     config.set(updatedConfig);

//     if (emit) {
//       emitting.set(true);
//       document.dispatchEvent(new CustomEvent(DATABASE_UPDATE_EVENT, {}));
//       emitting.set(false);
//     }

//     return updatedConfig;
//   }

//   async function mount() {
//     if (typeof document === "object") {
//       document.addEventListener(DATABASE_UPDATE_EVENT, async () => {
//         if (!emitting.get()) {
//           if (options?.id) {
//             console.log(`db: "${options.id}" received DATABASE_UPDATE_EVENT`);
//           }

//           const storedConfig = await get("config");

//           if (storedConfig) {
//             config.set(createConfig(storedConfig));
//           }
//         }
//       });

//       if (mounted.get()) {
//         return;
//       }

//       if (!/^true$/i.test(String(params?.reset))) {
//         config.set(createConfig((await get("config")) ?? {}));
//       }

//       url.set(new URL(window.location.href));

//       const updatedConfig = await update(params, false);

//       await set("config", updatedConfig);

//       mounted.set(true);
//     }

//     config.subscribe(async (updatedConfig) => {
//       if (mounted.get() && updatedConfig) {
//         await set("config", config.get());

//         let updatedUrl = url.get();

//         if (updatedUrl) {
//           updatedUrl = new URL(updatedUrl);
//           updatedUrl.search = "";

//           url.set(updatedUrl);
//         }
//       }
//     });

//     url.subscribe((updatedUrl) => {
//       if (mounted.get() && updatedUrl) {
//         window.history.pushState({}, "", updatedUrl);

//         window.dispatchEvent(
//           new CustomEvent<UrlUpdateEventDetail>(URL_UPDATE_EVENT, {
//             detail: {
//               url: updatedUrl.href,
//             },
//           })
//         );
//       }
//     });

//     mounted.set(true);
//   }

//   return {
//     mount,
//     update,

//     config,
//     url,
//     mounted,
//   };
// }

import { get, set } from "idb-keyval";
import { atom, type WritableAtom } from "nanostores";
import { assign } from "radash";
import { Config, PartialConfig, createConfig } from "./config";
import {
  DATABASE_UPDATE_EVENT,
  URL_UPDATE_EVENT,
  UrlUpdateEventDetail,
} from "./constants";
import { DeepPartial } from "./utils";

export interface Database {
  mount: () => Promise<void>;
  update: (updates: DeepPartial<Config> | PartialConfig) => Promise<Config>;

  config: WritableAtom<Config | undefined>;
  url: WritableAtom<URL | undefined>;
  mounted: WritableAtom<boolean>;
}

export function db(
  params: Record<string, string | object>,
  options?: { id?: string }
): Database {
  const mounted = atom(false);
  const emitting = atom(false);
  const config = atom<Config | undefined>();
  const url = atom<URL | undefined>();

  async function update(
    updates: DeepPartial<Config> | PartialConfig,
    emit = true
  ): Promise<Config> {
    const updatedConfig = createConfig(
      assign(createConfig(config.get() ?? {}), updates)
    );

    config.set(updatedConfig);

    if (emit) {
      emitting.set(true);
      document.dispatchEvent(new CustomEvent(DATABASE_UPDATE_EVENT, {}));
      emitting.set(false);
    }

    return updatedConfig;
  }

  async function mount() {
    if (typeof document === "object") {
      document.addEventListener(DATABASE_UPDATE_EVENT, async () => {
        if (!emitting.get()) {
          if (options?.id) {
            console.log(`db: "${options.id}" received DATABASE_UPDATE_EVENT`);
          }

          const storedConfig = await get("config");

          if (storedConfig) {
            config.set(createConfig(storedConfig));
          }
        }
      });

      if (mounted.get()) {
        return;
      }

      console.log("ssr config: ", params);

      console.log("existing idb config: ", await get("config"));
      console.log(
        "refreshed existing idb config: ",
        createConfig((await get("config")) ?? {})
      );

      if (!/^true$/i.test(String(params?.reset))) {
        config.set(createConfig((await get("config")) ?? {}));
      }

      url.set(new URL(window.location.href));

      const updatedConfig = await update(params, false);

      await set("config", updatedConfig);

      mounted.set(true);
    }

    config.subscribe(async (updatedConfig) => {
      if (mounted.get() && updatedConfig) {
        await set("config", config.get());

        let updatedUrl = url.get();

        if (updatedUrl) {
          updatedUrl = new URL(updatedUrl);
          updatedUrl.search = "";

          url.set(updatedUrl);
        }
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
  }

  return {
    mount,
    update,

    config,
    url,
    mounted,
  };
}
