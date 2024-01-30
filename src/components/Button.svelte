<script lang="ts">
  import tw from "clsx";
  import Tooltip from "./Tooltip.svelte";

  export let tooltip: string;
  export let onclick: () => any = () => {};
</script>

{#if tooltip}
  <Tooltip
    message={tooltip}
    {onclick}
    class={tw(
      "cursor-pointer w-12 h-12 flex justify-center items-center rounded-lg text-grey",
      "transition-all duration-100 ease-in-out hover:bg-tinge hover:dark:bg-bauhaus",
      "focus:outline-none border-2 border-transparent focus:border-black dark:border-white"
    )}
  >
    <slot />
  </Tooltip>
{:else}
  <button on:click={onclick} class="focus:outline-none">
    <slot />
  </button>
{/if}
