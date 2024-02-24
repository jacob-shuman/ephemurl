<script lang="ts">
  import {
    IconBrandGithub,
    IconDeviceDesktop,
    IconMoon,
    IconSun,
  } from "@tabler/icons-svelte";
  import { onMount } from "svelte";
  import { createConfig, type Config } from "../config";
  import { PALETTE_TOGGLE_EVENT, type PaletteToggleEvent } from "../constants";
  import { db } from "../db";
  import type { ThemeMode } from "../theme";
  import Button from "./Button.svelte";
  import LinkButton from "./LinkButton.svelte";

  export let config: Config;

  const { url, params, update } = db<Config>((c) => createConfig(c));

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
    window.dispatchEvent(
      new CustomEvent<PaletteToggleEvent>(PALETTE_TOGGLE_EVENT, {
        detail: {
          opened: document.documentElement.classList.toggle("palette"),
        },
      })
    );
  }

  onMount(() => {
    url.set(new URL(window.location.href));

    if (
      $params.theme.mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: { mode: "system-dark" } });
    } else if (
      $params.theme.mode === "system-dark" &&
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
        update({ theme: { mode: cycleTheme($params.theme.mode) } });
      }}
    >
      {#if ($params.theme.mode ?? config.theme.mode) === "dark"}
        <IconMoon class="h-6 w-6" />
      {:else if ($params.theme.mode ?? config.theme.mode) === "light"}
        <IconSun class="h-6 w-6" />
      {:else}
        <IconDeviceDesktop class="h-6 w-6" />
      {/if}
    </Button>

    <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <LinkButton
      tooltip="GitHub Repo"
      href="https://github.com/jacob-shuman/ephemurl-site"
    >
      <IconBrandGithub class="w-6 h-6" />
    </LinkButton>

    <!-- <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <Button tooltip="Command Palette" onclick={togglePalette}>
      <IconPrompt class="w-6 h-6" />
    </Button> -->
  </div>
</nav>
