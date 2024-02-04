import { atom, computed } from "nanostores";
import { assign, crush, mapKeys } from "radash";
import { PARAM_UPDATE_EVENT, type ParamUpdateEventDetail } from "./constants";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export function db<Params extends object>(
  parse: (params: Record<string, string>) => Params = (p) => p as Params
) {
  const url = atom<URL | undefined>(
    typeof window === "object" ? new URL(window.location.href) : undefined
  );

  const push = atom(false);

  const params = computed<Params, typeof url>(url, (url) => {
    if (url) {
      const updatedParams = parse(
        Object.fromEntries(url.searchParams.entries())
      );

      // update browser url
      if (push.get() && typeof window === "object") {
        const searchParams = getSearchParams(updatedParams);
        const updatedUrl = new URL(window.location.href);

        updatedUrl.search = searchParams.toString();

        window.history.pushState({}, "", updatedUrl);

        window.dispatchEvent(
          new CustomEvent<ParamUpdateEventDetail<Params>>(PARAM_UPDATE_EVENT, {
            detail: {
              url: url.href,
              params: updatedParams,
            },
          })
        );
      }

      return updatedParams;
    }

    return parse({});
  });

  function getSearchParams(params: Params): URLSearchParams {
    return new URLSearchParams(
      mapKeys(crush({ ...params }), (k) => String(k).replaceAll(".", "-"))
    );
  }

  const update = (updates: DeepPartial<Params>) => {
    const updatedUrl = new URL(url.get()?.href ?? window.location.href);
    const currentParams = params.get();

    if (currentParams) {
      updatedUrl.search = getSearchParams(
        assign(currentParams, updates) as Params
      ).toString();
    }

    push.set(true);
    url.set(updatedUrl);
    push.set(false);
  };

  return { url, params, push, update };
}
