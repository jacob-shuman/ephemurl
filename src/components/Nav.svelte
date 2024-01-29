<script lang="ts">
  import {
    IconDeviceDesktop,
    IconMoon,
    IconPrompt,
    IconSun,
  } from "@tabler/icons-svelte";
  import Button from "./Button.svelte";

  import { toast } from "svelte-sonner";

  export let theme: string = "system-dark";
  let open = false;
  let mounted = false;

  type Params = {
    theme: "dark" | "light" | "system" | "system-dark";
  };

  // const { params, url, update } = db<Params>(
  //   { theme: "system-dark" },
  //   {
  //     parse: (p) => {
  //       console.log("parsed");
  //       return { theme: p.theme ?? "system-dark" } as Params;
  //     },
  //     // getUrl: () => {
  //     //   if (mounted) return new URL(window.location.href);

  //     //   return new URL("");
  //     // },
  //     canUpdate: () => mounted,
  //     updateUrl: (url) => {
  //       console.log("updating URL ", url);
  //       window.history.pushState({}, "", url);
  //     },
  //   }
  // );

  // function cycleTheme() {
  //   switch ($params?.theme ?? "system") {
  //     case "dark":
  //       console.log("updating to light");
  //       update({ theme: "light" });
  //     case "light":
  //       console.log("updating to system");
  //       update({
  //         theme: window.matchMedia("(prefers-color-scheme: dark)").matches
  //           ? "system-dark"
  //           : "system",
  //       });
  //       break;
  //     default:
  //       console.log("updating to dark");
  //       update({ theme: "dark" });
  //       break;
  //   }
  // }

  // onMount(() => {
  //   mounted = true;
  //   url.set(new URL(window.location.href));
  // });
</script>

<!-- <Palette bind:open /> -->

<nav class="flex flex-col gap-y-2 sm:flex-row sm:gap-y-0 justify-between">
  <div class="flex flex-col gap-y-2">
    <h1 class="font-rubik-mono text-4xl">ephemurl</h1>
    <div class="h-0.5 rounded bg-tinge dark:bg-bauhaus"></div>
  </div>

  <!-- TODO: implement theme selector -->
  <div class="flex items-center gap-x-3">
    <Button
      tooltip="Theme"
      onclick={() => {
        toast("testing");
      }}
    >
      {#if theme === "dark"}
        <IconMoon class="w-6 h-6" />
      {:else if theme === "light"}
        <IconSun class="w-6 h-6" />
      {:else}
        <IconDeviceDesktop class="w-6 h-6" />
      {/if}
    </Button>

    <div class="h-4 w-0.5 rounded bg-tinge dark:bg-bauhaus" />

    <Button tooltip="Command Palette" onclick={() => (open = !open)}>
      <IconPrompt class="w-6 h-6" />
    </Button>
  </div>
</nav>
