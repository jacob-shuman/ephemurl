<script lang="ts">
  import { Tooltip as T } from "bits-ui";
  import tw from "clsx";
  import { Tooltip } from "ephemurl-utils";

  export let tooltip: string;
  export let active: boolean = false;
  export let href: string | undefined = undefined;
  const classes = tw(
    "select-none cursor-pointer size-12 flex justify-center items-center rounded",
    "transition-all duration-100 ease-out",
    "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
    "focus:outline-none ring-1 ring-transparent ring-offset-2 ring-offset-bg-500 dark:ring-offset-bg-dark-500 focus:ring-bg-100 focus:dark:ring-bg-dark-100",
    "active:bg-bg-400 active:text-bg-100 active:dark:bg-bg-dark-400 active:dark:text-bg-dark-100",
    {
      "bg-fg-500 dark:bg-fg-dark-500 text-fg-100 dark:text-fg-dark-100": active,
      "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100":
        !active,
    }
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
