<script lang="ts">
  // TODO: i have no idea why but for some reason the utils module wont build correctly unless there is an import to $lib
  import {} from "$lib";
  import tw from "clsx";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";
  import Tooltip from "./Tooltip.svelte";

  export let active: boolean = false;
  export let tooltip: string | undefined = undefined;
  export let disabled: HTMLButtonAttributes["disabled"] = false;
  export let onactive: (button: HTMLButtonElement) => void = () => {};
  export let onclick: HTMLButtonAttributes["on:click"] = () => {};
  export let onfocus: HTMLButtonAttributes["on:focus"] = () => {};
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
  let buttonElement: HTMLButtonElement;

  $: if (active) {
    onactive?.(buttonElement);
  }

  $: buttonClasses = tw(
    "select-none cursor-pointer size-12 flex justify-center items-center rounded",
    "transition-all duration-100 ease-out",
    "focus:outline-none ring-1 ring-transparent ring-offset-2 ring-offset-transparent dark:ring-offset-transparent focus:ring-bg-100 focus:dark:ring-bg-dark-100",
    {
      "bg-fg-500 dark:bg-fg-dark-500 text-fg-100 dark:text-fg-dark-100":
        active && !disabled,
      "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100 active:bg-bg-400 active:text-bg-100 active:dark:bg-bg-dark-400 active:dark:text-bg-dark-100":
        !active && !disabled,
      "text-bg-400 dark:text-bg-dark-400": disabled,
      "bg-bg-400 dark:bg-bg-dark-400 text-bg-300 dark:text-bg-dark-300":
        disabled && active,
    }
  );
</script>

{#if tooltip}
  <Tooltip message={tooltip} let:builder>
    <button
      bind:this={buttonElement}
      use:builder.action
      {...builder}
      class={twMerge(buttonClasses, classes)}
      on:click={onclick}
      on:focus={onfocus}
      on:touchstart={(event) => startHoldEffect(event.shiftKey)}
      on:touchend={() => stopHoldEffect()}
      on:mousedown={(event) => startHoldEffect(event.shiftKey)}
      on:mouseleave={() => stopHoldEffect()}
      on:mouseup={() => stopHoldEffect()}
      {disabled}
    >
      <slot />
    </button>
  </Tooltip>
{:else}
  <button
    bind:this={buttonElement}
    class={twMerge(buttonClasses, classes)}
    on:click={onclick}
    on:focus={onfocus}
    on:touchstart={(event) => startHoldEffect(event.shiftKey)}
    on:touchend={() => stopHoldEffect()}
    on:mousedown={(event) => startHoldEffect(event.shiftKey)}
    on:mouseleave={() => stopHoldEffect()}
    on:mouseup={() => stopHoldEffect()}
    {disabled}
  >
    <slot />
  </button>
{/if}
