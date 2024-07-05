<script lang="ts">
  import {
    IconBrandGithub,
    IconDeviceDesktop,
    IconMoonFilled,
    IconPrompt,
    IconSunFilled,
  } from "@tabler/icons-svelte";
  import {
    BaseConfigSchema,
    createDb,
    cycleTheme,
    type BaseConfig,
  } from "ephemurl-db";
  import { Button, Utils } from "ephemurl-utils";
  import { onMount } from "svelte";
  import { PALETTE_TOGGLE_EVENT } from "../constants";
  import LinkButton from "./LinkButton.svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: BaseConfig;

  const db = createDb(BaseConfigSchema, { params, dbId: ssrConfig.id });
  $: ({ config, update, mount } = db);

  onMount(async () => {
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

<Utils {ssrConfig} {db} />

<nav class="flex flex-col justify-between gap-y-2 sm:flex-row sm:gap-y-0">
  <div class="flex flex-col gap-y-2">
    <h1 class="font-black text-4xl">EPHEMURL</h1>
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
        <IconMoonFilled class="size-6" />
      {:else if ($config ?? ssrConfig).theme.mode === "light"}
        <IconSunFilled class="size-6" />
      {:else}
        <IconDeviceDesktop class="size-6" />
      {/if}
    </Button>

    <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <Button
      tooltip="Command Palette"
      onclick={() => {
        window.dispatchEvent(new CustomEvent(PALETTE_TOGGLE_EVENT));
      }}
    >
      <IconPrompt class="size-6" />
    </Button>

    <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <LinkButton
      tooltip="GitHub Repo"
      href="https://github.com/jacob-shuman/ephemurl-site"
    >
      <IconBrandGithub class="size-6" />
    </LinkButton>
  </div>
</nav>
