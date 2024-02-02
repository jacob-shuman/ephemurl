<script lang="ts">
  import { onMount } from "svelte";
  import * as v from "valibot";
  import {
    PARAM_UPDATE_EVENT,
    RawParamsSchema,
    type Params,
    type ThemeMode,
  } from "../constants";
  import { db } from "../db";

  export let searchParams: Params;

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

  const { url, params, push, update } = db<Params>((p) =>
    v.parse(RawParamsSchema, p)
  );

  $: if (typeof window === "object") refreshTheme($params.theme.mode);

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
          ($params.theme.mode === "system" && matches) ||
          ($params.theme.mode === "system-dark" && !matches)
        ) {
          update({ theme: { mode: matches ? "system-dark" : "system" } });
        }

        refreshTheme($params.theme.mode ?? searchParams.theme.mode);
      });

    refreshTheme($params.theme.mode ?? searchParams.theme.mode);
  });
</script>

<svelte:head>
  {#if $params.theme.mode === "system" || $params.theme.mode === "light"}
    <link href="/favicon-light.svg" type="image/svg+xml" rel="icon" />
  {:else}
    <link href="/favicon-dark.svg" type="image/svg+xml" rel="icon" />
  {/if}
</svelte:head>
