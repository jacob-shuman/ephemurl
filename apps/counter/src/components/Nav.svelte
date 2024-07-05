<script lang="ts">
  import { CounterSchema } from "@constants";
  import {
    IconDeviceDesktop,
    IconMoonFilled,
    IconReload,
    IconSunFilled,
  } from "@tabler/icons-svelte";
  import tw from "clsx";
  import { createDb, cycleTheme, type BaseConfig } from "ephemurl-db";
  import { AlertDialog, Button, Utils } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: BaseConfig;

  const db = createDb(CounterSchema, { params, dbId: ssrConfig.id });
  $: ({ mounted, config, update, mount } = db);
  $: title = $config?.counter?.title ?? "counter";

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
    {$config.counter.title ?? "counter"} ({$config.counter.value})
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
        update({ counter: { title: e.currentTarget.value ?? "" } });
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

    <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <AlertDialog
      title="Reset Counter?"
      let:openDialog
      onConfirm={() => update({ counter: { value: 0 } })}
    >
      <Button
        tooltip="Reset Counter"
        onclick={() => {
          openDialog();
        }}
      >
        <IconReload class="size-6" />
      </Button>
    </AlertDialog>
  </div>
</nav>
