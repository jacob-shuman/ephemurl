<script lang="ts">
  // TODO: i have no idea why but for some reason the utils module wont build correctly unless there is an import to $lib
  import {} from "$lib";
  import tw from "clsx";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";
  import Tooltip from "./Tooltip.svelte";

  export let active: boolean = false;
  export let tooltip: string | undefined = undefined;
  export let onclick: HTMLButtonAttributes["on:click"] = () => {};
  export let onhold: ((shiftKey: boolean) => void) | undefined = undefined;
  export let onlonghold: ((shiftKey: boolean) => void) | undefined = undefined;
  export let holdInterval = 100;
  export let longHoldInterval = 100;
  export let holdTimeout = 500;
  export let longHoldTimeout = 3000;
  export let classes: string | undefined = undefined;
  export { classes as class };

  function startHoldEffect(shift: boolean) {
    if (onhold !== undefined) {
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => onhold?.(shift), holdInterval);

        if (onlonghold !== undefined) {
          timeoutId = setTimeout(() => {
            clearInterval(intervalId);

            intervalId = setInterval(
              () => onlonghold?.(shift),
              longHoldInterval
            );
          }, longHoldTimeout);
        }
      }, holdTimeout);
    }
  }

  function stopHoldEffect() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  let timeoutId: NodeJS.Timeout | undefined = undefined;
  let intervalId: NodeJS.Timeout | undefined = undefined;
</script>

{#if tooltip}
  <Tooltip message={tooltip} let:builder>
    <button
      use:builder.action
      {...builder}
      class={twMerge(
        tw(
          "select-none cursor-pointer size-12 flex justify-center items-center rounded",
          "transition-all duration-100 ease-out",
          "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
          "focus:outline-none ring-1 ring-transparent ring-offset-2 ring-offset-bg-500 dark:ring-offset-bg-dark-500 focus:ring-bg-100 focus:dark:ring-bg-dark-100",
          "active:bg-bg-400 active:text-bg-100 active:dark:bg-bg-dark-400 active:dark:text-bg-dark-100",
          {
            "bg-fg-500 dark:bg-fg-dark-500 text-fg-100 dark:text-fg-dark-100":
              active,
            "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100":
              !active,
          }
        ),
        classes
      )}
      on:click={onclick}
      on:touchstart={(event) => startHoldEffect(event.shiftKey)}
      on:touchend={() => stopHoldEffect()}
      on:mousedown={(event) => startHoldEffect(event.shiftKey)}
      on:mouseleave={() => stopHoldEffect()}
      on:mouseup={() => stopHoldEffect()}
    >
      <slot />
    </button>
  </Tooltip>
{:else}
  <button
    class={twMerge(
      tw(
        "select-none cursor-pointer size-12 flex justify-center items-center rounded",
        "transition-all duration-100 ease-out",
        "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
        "focus:outline-none ring-1 ring-transparent ring-offset-2 ring-offset-bg-500 dark:ring-offset-bg-dark-500 focus:ring-bg-100 focus:dark:ring-bg-dark-100",
        "active:bg-bg-500 active:text-bg-100 active:dark:bg-bg-dark-500 active:dark:text-bg-dark-100",
        {
          "bg-fg-500 dark:bg-fg-dark-500 text-fg-100 dark:text-fg-dark-100":
            active,
          "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100":
            !active,
        }
      ),
      classes
    )}
    on:click={onclick}
    on:touchstart={(event) => startHoldEffect(event.shiftKey)}
    on:touchend={() => stopHoldEffect()}
    on:mousedown={(event) => startHoldEffect(event.shiftKey)}
    on:mouseleave={() => stopHoldEffect()}
    on:mouseup={() => stopHoldEffect()}
  >
    <slot />
  </button>
{/if}
