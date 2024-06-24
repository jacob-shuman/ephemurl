<script lang="ts">
  import tw from "clsx";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";
  import Tooltip from "./Tooltip.svelte";

  export let tooltip: string | undefined = undefined;
  export let onclick: HTMLButtonAttributes["on:click"] = () => {};
  export let onhold: ((shiftKey: boolean) => void) | undefined = undefined;
  // TODO: implement on long hold
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

  const buttonClass = twMerge(
    tw(
      "select-none cursor-pointer size-12 flex justify-center items-center rounded",
      "transition-all duration-100 ease-out",
      "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
      "focus:outline-none ring-1 ring-transparent ring-offset-1 ring-offset-transparent focus:ring-bg-100 dark:focus:ring-bg-dark-100",
      "active:bg-bg-500 active:text-bg-100"
    ),
    classes
  );
</script>

{#if tooltip}
  <Tooltip message={tooltip} let:builder>
    <button
      use:builder.action
      {...builder}
      class={buttonClass}
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
    class={buttonClass}
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
