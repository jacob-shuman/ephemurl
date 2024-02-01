<script lang="ts">
  import {
    IconBrandGithub,
    IconDeviceDesktop,
    IconMoon,
    IconSun,
  } from "@tabler/icons-svelte";
  import { onMount } from "svelte";
  import * as v from "valibot";
  import { RawParamsSchema, type Params, type ThemeMode } from "../constants";
  import { db } from "../db";
  import Button from "./Button.svelte";
  import LinkButton from "./LinkButton.svelte";

  export let themeMode: ThemeMode = "system-dark";

  const { url, params, update } = db<Params>((p) =>
    v.parse(RawParamsSchema, p)
  );

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

<!-- <Palette bind:open /> -->

<nav class="flex flex-col justify-between gap-y-2 sm:flex-row sm:gap-y-0">
  <div class="flex flex-col gap-y-2">
    <h1 class="font-rubik-mono text-4xl">ephemurl</h1>
    <div class="bg-tinge dark:bg-bauhaus h-0.5 rounded"></div>
  </div>

  <div class="flex items-center gap-x-3">
    <Button
      tooltip="Theme"
      onclick={() => {
        update({ theme: { mode: cycleTheme($params.theme.mode) } });
      }}
    >
      {#if ($params.theme.mode ?? themeMode) === "dark"}
        <IconMoon class="h-6 w-6" />
      {:else if ($params.theme.mode ?? themeMode) === "light"}
        <IconSun class="h-6 w-6" />
      {:else}
        <IconDeviceDesktop class="h-6 w-6" />
      {/if}
    </Button>

    <div class="h-4 w-0.5 rounded bg-tinge dark:bg-bauhaus" />

    <LinkButton
      tooltip="GitHub Repo"
      href="https://github.com/jacob-shuman/ephemurl-site"
    >
      <IconBrandGithub class="w-6 h-6" />
    </LinkButton>

    <!-- <div class="h-4 w-0.5 rounded bg-tinge dark:bg-bauhaus" /> -->
    <!--  -->
    <!-- <Button tooltip="Command Palette" onclick={() => (open = !open)}>
      <IconBrandGithub class="w-6 h-6" />
    </Button> -->
  </div>
</nav>
