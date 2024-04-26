<script lang="ts">
  import tw from "clsx";
  import Tooltip from "./Tooltip.svelte";

  export let tooltip: string | undefined = undefined;
  export let onclick: () => any = () => {};

  let button: HTMLButtonElement;

  const buttonClass = tw(
    "cursor-pointer w-12 h-12 flex justify-center items-center rounded",
    "transition-all duration-100 ease-out",
    "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
    "focus:outline-none border-2 border-transparent focus:border-bg-100 dark:focus:border-bg-dark-100"
  );

  $: if (button) {
    button.onclick = onclick;
  }
</script>

{#if tooltip}
  <Tooltip message={tooltip} let:builder>
    <button
      use:builder.action
      {...builder}
      on:click={onclick}
      class={buttonClass}
    >
      <slot />
    </button>
  </Tooltip>
{:else}
  <button on:click={onclick} class={buttonClass}>
    <slot />
  </button>
{/if}
