<script lang="ts">
  import tw from "clsx";
  import Tooltip from "./Tooltip.svelte";

  export let tooltip: string;
  export let click: () => any = () => {};
</script>

<Tooltip message={tooltip}>
  <button
    on:click={click}
    class={tw(
      "cursor-pointer w-12 h-12 flex justify-center items-center rounded-lg text-grey focus:outline-none",
      "scale transition-all duration-100 ease-out hover:bg-tinge hover:dark:bg-bauhaus focus:bg-tinge focus:dark:bg-bauhaus"
    )}
  >
    <slot />
  </button>
</Tooltip>
