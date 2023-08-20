<script lang="ts">
  import {
    IconContrast,
    IconMoonFilled,
    IconSunFilled,
  } from "@tabler/icons-svelte";
  import { onDestroy } from "svelte";
  import { cycleTheme, prefersDark, theme } from "../stores";

  let mediaQuery: MediaQueryList;

  const updateDarkModePreference = ({
    matches,
  }: Partial<MediaQueryListEvent>) => prefersDark.set(matches ?? false);

  if (window) {
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    updateDarkModePreference(mediaQuery);

    mediaQuery.addEventListener("change", updateDarkModePreference);
  }

  onDestroy(() =>
    mediaQuery?.removeEventListener("change", updateDarkModePreference)
  );
</script>

<button
  on:click={() => cycleTheme()}
  class="h-12 px-3 flex items-center rounded-lg text-grey bg-tinge dark:bg-bauhaus"
>
  {#if $theme === "system"}
    <IconContrast class="w-6 h-6" />
  {/if}

  {#if $theme === "light"}
    <IconSunFilled class="w-6 h-6" />
  {/if}

  {#if $theme === "dark"}
    <IconMoonFilled class="w-6 h-6 " />
  {/if}
</button>

<svelte:body class="bg-red-500" />
