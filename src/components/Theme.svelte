<script lang="ts">
  import { onMount } from "svelte";
  import { PARAM_UPDATE_EVENT } from "../constants";
  import { db } from "../db";

  export let theme = "system-dark";

  type Params = {
    theme: "dark" | "light" | "system" | "system-dark";
  };

  function refreshTheme(theme: "dark" | "light" | "system" | "system-dark") {
    if (
      theme === "dark" ||
      ((theme === "system" || theme === "system-dark") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const { url, params, push, update } = db<Params>(
    (p) => ({ theme: p?.theme ?? "system-dark" }) as Params
  );

  $: if (typeof window === "object") refreshTheme($params.theme);

  onMount(() => {
    url.set(new URL(window.location.href));

    window.addEventListener(PARAM_UPDATE_EVENT, (e) => {
      const { detail } = e as CustomEvent<{ url: string; params: Params }>;

      if (detail.url && !$push) {
        url.set(new URL(detail.url));
      }
    });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (
          ($params.theme === "system" && matches) ||
          ($params.theme === "system-dark" && !matches)
        ) {
          update({ theme: matches ? "system-dark" : "system" });
        }

        refreshTheme($params.theme ?? (theme as Params["theme"]));
      });

    refreshTheme($params.theme ?? (theme as Params["theme"]));
  });
</script>
