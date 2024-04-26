<script lang="ts">
  import {
    buildTheme,
    type Config,
    type Database,
    type ThemeMode,
  } from "ephemurl-db";
  import { onMount } from "svelte";

  export let ssrConfig: Config;
  export let db: Database;

  const { update, config, url, mounted } = db;

  function refreshTheme(theme: ThemeMode) {
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

  $: {
    if (typeof window === "object") {
      refreshTheme($config?.theme.mode ?? ssrConfig.theme.mode);
    }
  }

  onMount(() => {
    mounted.subscribe(() => {
      const mountedConfig = $config;

      if (mountedConfig) {
        Object.entries(buildTheme(mountedConfig)).forEach(([k, v]) =>
          document.documentElement.style.setProperty(k, v)
        );
      }
    });

    url.set(new URL(window.location.href));

    // TODO:
    // window.addEventListener(PARAM_UPDATE_EVENT, (e) => {
    //   const { detail } = e as CustomEvent<{ url: string; params: Config }>;

    //   if (detail.url && !$push) {
    //     url.set(new URL(detail.url));
    //   }
    // });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (
          (($config ?? ssrConfig).theme.mode === "system" && matches) ||
          (($config ?? ssrConfig).theme.mode === "system-dark" && !matches)
        ) {
          update({ theme: { mode: matches ? "system-dark" : "system" } });
        }

        refreshTheme(($config ?? ssrConfig).theme.mode);
      });

    refreshTheme(($config ?? ssrConfig).theme.mode);
  });
</script>

<svelte:head>
  {#if ($config ?? ssrConfig).theme.mode === "system" || ($config ?? ssrConfig).theme.mode === "light"}
    <link href="/favicon-light.svg" type="image/svg+xml" rel="icon" />
  {:else}
    <link href="/favicon-dark.svg" type="image/svg+xml" rel="icon" />
  {/if}
</svelte:head>
