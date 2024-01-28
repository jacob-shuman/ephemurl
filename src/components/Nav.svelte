<script lang="ts">
  import DesktopIcon from "~icons/tabler/device-desktop";
  import MoonIcon from "~icons/tabler/moon";
  import PromptIcon from "~icons/tabler/prompt";
  import SunIcon from "~icons/tabler/sun";
  import Button from "./Button.svelte";

  export let theme: string = "system-dark";
</script>

<nav class="flex flex-col gap-y-2 sm:flex-row sm:gap-y-0 justify-between">
  <div class="flex flex-col gap-y-2">
    <h1 class="font-rubik-mono text-4xl">ephemurl</h1>
    <div class="h-0.5 rounded bg-tinge dark:bg-bauhaus"></div>
  </div>

  <!-- TODO: implement theme selector -->
  <div class="flex items-center gap-x-3">
    <Button tooltip="Theme">
      {#if theme === "dark"}
        <MoonIcon class="w-6 h-6" />
      {:else if theme === "light"}
        <SunIcon class="w-6 h-6" />
      {:else}
        <DesktopIcon class="w-6 h-6" />
      {/if}
    </Button>

    <div class="h-4 w-0.5 rounded bg-tinge dark:bg-bauhaus" />

    <Button tooltip="Command Palette">
      <PromptIcon class="w-6 h-6" />
    </Button>
  </div>
</nav>
