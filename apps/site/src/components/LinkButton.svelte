<script lang="ts">
  import { Tooltip as T } from "bits-ui";
  import tw from "clsx";
  import Tooltip from "./Tooltip.svelte";

  export let tooltip: string;
  export let active: boolean = false;
  export let href: string | undefined = undefined;
  const classes = tw(
    "cursor-pointer w-12 h-12 flex justify-center items-center rounded",
    "transition-all duration-100 ease-out",
    "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
    "focus:outline-none border-2 border-transparent focus:border-bg-100 dark:focus:border-bg-dark-100",

    active && "bg-fg-500 dark:bg-fg-dark-500 text-fg-100 dark:text-fg-dark-100"
  );
</script>

{#if tooltip}
  <Tooltip message={tooltip}>
    <T.Trigger asChild let:builder>
      <a use:builder.action {...builder} {href} class={classes}>
        <slot />
      </a>
    </T.Trigger>
  </Tooltip>
{:else}
  <a {href} class={classes}>
    <slot />
  </a>
{/if}
