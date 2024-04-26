<script lang="ts">
  import {
    IconDeviceDesktop,
    IconMoon,
    IconReload,
    IconSun,
  } from "@tabler/icons-svelte";
  import { db as createDb, type Config, type ThemeMode } from "ephemurl-db";
  import { Button } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: Config;

  const { config, update, mount } = createDb(params, { id: "nav" });

  function cycleTheme(mode: ThemeMode): ThemeMode {
    switch (mode) {
      case "dark":
        return "light";
      case "light":
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "system-dark"
          : "system";
      default:
        return "dark";
    }
  }

  onMount(async () => {
    // url.set(new URL(window.location.href));
    await mount();

    if (
      ($config ?? ssrConfig).theme.mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: { mode: "system-dark" } });
    } else if (
      ($config ?? ssrConfig).theme.mode === "system-dark" &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: { mode: "system" } });
    }
  });
</script>

<nav class="flex flex-col justify-between gap-y-2 sm:flex-row sm:gap-y-0">
  <div class="flex flex-col gap-y-2">
    <h1 class="font-rubik-mono text-4xl">untitled counter</h1>
    <div class="bg-bg-400 dark:bg-bg-dark-400 h-0.5 rounded"></div>
  </div>

  <!-- TODO: fix color flashing issue when changing themes -->
  <div class="flex items-center gap-x-3">
    <Button
      tooltip="Theme"
      onclick={() => {
        update({
          theme: { mode: cycleTheme(($config ?? ssrConfig).theme.mode) },
        });
      }}
    >
      {#if ($config ?? ssrConfig).theme.mode === "dark"}
        <IconMoon class="h-6 w-6" />
      {:else if ($config ?? ssrConfig).theme.mode === "light"}
        <IconSun class="h-6 w-6" />
      {:else}
        <IconDeviceDesktop class="h-6 w-6" />
      {/if}
    </Button>

    <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <Button
      tooltip="Reset Counter"
      onclick={() => {
        // update({counter: {value:0}})
      }}
    >
      <IconReload class="h-6 w-6" />
    </Button>
  </div>
</nav>
