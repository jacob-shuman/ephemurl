<script lang="ts">
  import {
    IconBrandGithub,
    IconDeviceDesktop,
    IconMoon,
    IconPrompt,
    IconSun,
  } from "@tabler/icons-svelte";
  import { createDb, type Config, type ThemeMode } from "ephemurl-db";
  import { onMount } from "svelte";
  import { PALETTE_TOGGLE_EVENT } from "../constants";
  import Button from "./Button.svelte";
  import LinkButton from "./LinkButton.svelte";

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

  function togglePalette() {
    window.dispatchEvent(new CustomEvent(PALETTE_TOGGLE_EVENT));
  }

  onMount(() => {
    // url.set(new URL(window.location.href));
    mount();

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
    <h1 class="font-rubik-mono text-4xl">ephemurl</h1>
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

    <Button tooltip="Command Palette" onclick={togglePalette}>
      <IconPrompt class="w-6 h-6" />
    </Button>

    <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <LinkButton
      tooltip="GitHub Repo"
      href="https://github.com/jacob-shuman/ephemurl-site"
    >
      <IconBrandGithub class="w-6 h-6" />
    </LinkButton>
  </div>
</nav>
