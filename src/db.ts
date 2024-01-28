import { atom, computed } from "nanostores";

export const db = <Params extends Record<string, string>>(
  baseParams: Params,
  options?: {
    parse?: (params: Record<string, string>) => Params;
    getUrl?: () => URL;
    updateUrl?: (url: URL) => void;
    canUpdate?: () => boolean;
  },
) => {
  const parse = options?.parse ?? ((p) => p as Params);
  const getUrl = options?.getUrl ??
    (() =>
      typeof window === "object" ? new URL(window.location.href) : undefined);
  const updateUrl = options?.updateUrl;
  const canUpdate = options?.canUpdate ?? (() => false);

  const url = atom<URL | undefined>(
    getUrl(),
  );
  const params = computed<Params | undefined, typeof url>(url, (url) => {
    if (url) {
      const updatedParams = {
        ...baseParams,
        ...parse(Object.fromEntries(url.searchParams.entries())),
      };

      // update browser url
      if (canUpdate() && updateUrl) {
        const searchParams = getSearchParams(
          updatedParams,
        );
        const updatedUrl = new URL(window.location.href);

        updatedUrl.search = searchParams.toString();

        updateUrl(updatedUrl);
      }

      return updatedParams;
    }

    return parse(baseParams);
  });

  const getSearchParams = (params: Params): URLSearchParams => {
    return new URLSearchParams({
      ...Object.fromEntries(
        Object.entries(params)
          .filter(([_, v]) => v !== undefined)
          .map(([k, v]) => [k, v?.toString()]),
      ),
    });
  };

  const update = (updates: Partial<Params>) => {
    const updatedUrl = url.get() ?? new URL(window.location.href);
    const currentParams = params.get();

    if (currentParams) {
      updatedUrl.search = getSearchParams({
        ...currentParams,
        ...updates,
      }).toString();
    }

    url.set(updatedUrl);
  };

  return { url, params, update };
};
