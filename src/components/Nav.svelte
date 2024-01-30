<script lang="ts">
  import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-svelte";
  import { onMount } from "svelte";
  import { db } from "../db";
  import Button from "./Button.svelte";

  export let theme: string = "system-dark";
  let isMounted = false;

  type Params = {
    theme: "dark" | "light" | "system" | "system-dark";
  };

  const { url, params, update } = db<Params>(
    (p) => ({ theme: p?.theme ?? "system-dark" }) as Params
  );

  // const { url, params, update } = db<Params>(
  //   { theme: "system-dark" },
  //   { parse: (p) => ({ theme: p?.theme ?? "system-dark" }) as Params }
  // );

  function cycleTheme(theme: Params["theme"]): Params["theme"] {
    switch (theme) {
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
    isMounted = true;

    url.set(new URL(window.location.href));

    if (
      $params.theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: "system-dark" });
    } else if (
      $params.theme === "system-dark" &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: "system" });
    }
  });
</script>

<!-- <Palette bind:open /> -->

<nav class="flex flex-col justify-between gap-y-2 sm:flex-row sm:gap-y-0">
  <div class="flex flex-col gap-y-2">
    <h1 class="font-rubik-mono text-4xl">ephemurl</h1>
    <div class="bg-tinge dark:bg-bauhaus h-0.5 rounded"></div>
  </div>

  <!-- TODO: implement theme selector -->
  <div class="flex items-center gap-x-3">
    <Button
      tooltip="Theme"
      onclick={() => {
        update({ theme: cycleTheme($params.theme) });
      }}
    >
      {#if ($params.theme ?? theme) === "dark"}
        <IconMoon class="h-6 w-6" />
      {:else if ($params.theme ?? theme) === "light"}
        <IconSun class="h-6 w-6" />
      {:else}
        <IconDeviceDesktop class="h-6 w-6" />
      {/if}
    </Button>

    <!-- <div class="h-4 w-0.5 rounded bg-tinge dark:bg-bauhaus" /> -->
    <!--  -->
    <!-- <Button tooltip="Command Palette" onclick={() => (open = !open)}> -->
    <!-- <IconPrompt class="w-6 h-6" /> -->
    <!-- </Button> -->
  </div>
</nav>
