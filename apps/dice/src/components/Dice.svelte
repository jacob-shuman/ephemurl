<script lang="ts">
  import { DiceSchema } from "@constants";
  import {
    IconDiamondsFilled,
    IconDice1Filled,
    IconDice2Filled,
    IconDice3Filled,
    IconDice4Filled,
    IconDice5Filled,
    IconDice6Filled,
    IconHexagonFilled,
    IconSquareFilled,
    IconTriangleFilled,
  } from "@tabler/icons-svelte";
  import tw from "clsx";
  import { createDb } from "ephemurl-db";
  import { toast, Tooltip } from "ephemurl-utils";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { twMerge } from "tailwind-merge";

  export let dbId: string;
  export let classes: string | undefined;
  export { classes as class };

  const { mount, config, mounted } = createDb(DiceSchema, {
    dbId,
  });
  let currentRolls: number;
  let twist = spring(0, { stiffness: 0.1, damping: 0.15 });

  const triggerTwist = () => {
    if ($config.dice.animation === "twist") {
      twist.set(Math.PI * 2);
      setTimeout(() => twist.set(0), 100);
      currentRolls = $config.dice.rolls;
    }
  };

  config.subscribe(({ dice }) => {
    if (
      $mounted &&
      currentRolls !== dice.rolls &&
      $config.dice.animation === "twist"
    ) {
      triggerTwist();
    }
  });

  onMount(() => {
    mount();
    triggerTwist();
  });
</script>

<!-- TODO: does it actually help to have class:opacity like that? -->
<div
  class={twMerge(
    tw(
      "w-full flex justify-center items-center",
      "duration-200 transition-opacity ease-out"
    ),
    classes
  )}
  class:opacity-100={$mounted}
  class:opacity-0={!$mounted}
>
  <Tooltip message={`${$config.dice.value} (click to copy)`} let:builder>
    <button
      use:builder.action
      {...builder}
      class="text-7xl font-black focus:outline-none"
      style="transform: rotate({$twist}rad);"
      on:click={() => {
        if ($mounted) {
          navigator.clipboard.writeText($config.dice.value.toString());
          toast(`Copied ${$config.dice.value} to clipboard`);
        }
      }}
    >
      {#if $config.dice.max === 6 && $config.dice.glyphs === "auto"}
        {#if $config.dice.value === 1}
          <IconDice1Filled class="size-48" />
        {:else if $config.dice.value === 2}
          <IconDice2Filled class="size-48" />
        {:else if $config.dice.value === 3}
          <IconDice3Filled class="size-48" />
        {:else if $config.dice.value === 4}
          <IconDice4Filled class="size-48" />
        {:else if $config.dice.value === 5}
          <IconDice5Filled class="size-48" />
        {:else if $config.dice.value === 6}
          <IconDice6Filled class="size-48" />
        {/if}
      {:else}
        <div class="relative size-48">
          {#if $config.dice.max === 4}
            <IconTriangleFilled class="size-48" />
          {:else if $config.dice.max === 6}
            <IconSquareFilled class="size-48" />
          {:else if $config.dice.max === 10}
            <IconDiamondsFilled class="size-48" />
          {:else}
            <IconHexagonFilled class="size-48" />
          {/if}

          <span
            class="text-bg-500 dark:text-bg-dark-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none"
          >
            {$config.dice.value}
          </span>
        </div>
      {/if}
    </button>
  </Tooltip>
</div>
