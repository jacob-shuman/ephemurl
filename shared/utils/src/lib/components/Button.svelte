<script lang="ts">
  import { generateButtonClasses } from "$lib";
  import type { HTMLButtonAttributes } from "svelte/elements";
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

  $: buttonClass = generateButtonClasses({ active, classes });
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
