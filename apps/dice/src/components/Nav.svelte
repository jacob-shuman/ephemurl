<script lang="ts">
  import { DiceSchema } from "@constants";
  import {
    IconDeviceDesktop,
    IconMoonFilled,
    IconSunFilled,
  } from "@tabler/icons-svelte";
  import tw from "clsx";
  import { createDb, cycleTheme, type BaseConfig } from "ephemurl-db";
  import { Button, Utils } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: BaseConfig;

  const db = createDb(DiceSchema, { params, dbId: ssrConfig.id });
  $: ({ mounted, config, update, mount } = db);
  $: title = $config?.dice?.title ?? "dice";

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

<svelte:head>
  <title>
    {$config.dice.title ?? "dice"} ({$config.dice.value})
  </title>
</svelte:head>

<nav
  class="flex flex-col sm:items-center justify-between gap-y-2 sm:flex-row sm:gap-y-0 sm:gap-x-3"
>
  <div
    class={tw(
      "flex flex-col gap-y-2 grow",
      "duration-200 transition-opacity ease-out",
      $mounted ? "opacity-100" : "opacity-0"
    )}
  >
    <input
      class="font-black text-3xl focus:outline-none bg-transparent"
      value={title}
      placeholder="counter"
      on:keyup={(e) => {
        update({ dice: { title: e.currentTarget.value ?? "" } });
      }}
    />

    <div class="bg-bg-400 max-w-36 dark:bg-bg-dark-400 h-0.5 rounded"></div>
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
  </div>
</nav>
