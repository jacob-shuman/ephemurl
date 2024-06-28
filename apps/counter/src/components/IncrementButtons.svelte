<script lang="ts">
  import { CounterSchema } from "@constants";
  import { IconMinus, IconPlus } from "@tabler/icons-svelte";
  import { createDb } from "ephemurl-db";
  import { Button } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let dbId: string;

  const { mounted, config, mount, update } = createDb({}, CounterSchema, {
    dbId,
  });

  onMount(() => {
    mount();
  });
</script>

<div class="flex flex-col items-center gap-y-4">
  <div
    class="flex flex-col sm:flex-row w-full items-center gap-x-4"
    class:opacity-100={$mounted}
    class:opacity-0={!$mounted}
  >
    <Button
      class="w-full flex-1 min-h-8"
      tooltip="Decrement 10"
      onclick={() =>
        update(({ counter }) => ({ counter: { value: counter.value - 10 } }))}
      onhold={() =>
        update(({ counter }) => ({ counter: { value: counter.value - 10 } }))}
      onlonghold={() =>
        update(({ counter }) => ({ counter: { value: counter.value - 15 } }))}
    >
      -10
    </Button>

    <div
      class="h-4 w-full max-w-0.5 rounded rotate-90 sm:rotate-0 bg-bg-400 dark:bg-bg-dark-400"
    />
    <Button
      class="w-full flex-1 min-h-8"
      tooltip="Decrement 5"
      onclick={() =>
        update(({ counter }) => ({ counter: { value: counter.value - 5 } }))}
      onhold={() =>
        update(({ counter }) => ({ counter: { value: counter.value - 5 } }))}
      onlonghold={() =>
        update(({ counter }) => ({ counter: { value: counter.value - 10 } }))}
    >
      -5
    </Button>

    <div
      class="h-4 w-full max-w-0.5 rounded rotate-90 sm:rotate-0 bg-bg-400 dark:bg-bg-dark-400"
    />

    <Button
      class="w-full flex-1 min-h-8"
      tooltip="Increment 5"
      onclick={() =>
        update(({ counter }) => ({ counter: { value: counter.value + 5 } }))}
      onhold={() =>
        update(({ counter }) => ({ counter: { value: counter.value + 5 } }))}
      onlonghold={() =>
        update(({ counter }) => ({ counter: { value: counter.value + 10 } }))}
    >
      +5
    </Button>

    <div
      class="h-4 w-full max-w-0.5 rounded rotate-90 sm:rotate-0 bg-bg-400 dark:bg-bg-dark-400"
    />

    <Button
      class="w-full flex-1 min-h-8"
      tooltip="Increment 10"
      onclick={() =>
        update(({ counter }) => ({ counter: { value: counter.value + 10 } }))}
      onhold={() =>
        update(({ counter }) => ({ counter: { value: counter.value + 10 } }))}
      onlonghold={() =>
        update(({ counter }) => ({ counter: { value: counter.value + 15 } }))}
    >
      +10
    </Button>
  </div>

  <div class="flex items-center justify-center gap-x-4 w-full">
    <Button
      class="w-full h-24"
      tooltip="Decrement"
      onclick={(event) =>
        update(({ counter }) => ({
          counter: { value: counter.value - (event.shiftKey ? 10 : 1) },
        }))}
      onhold={(shiftKey) =>
        update(({ counter }) => ({
          counter: { value: counter.value - (shiftKey ? 10 : 1) },
        }))}
      onlonghold={(shiftKey) =>
        update(({ counter }) => ({
          counter: { value: counter.value - (shiftKey ? 50 : 25) },
        }))}
    >
      <IconMinus class="size-8" />
    </Button>

    <div class="h-4 w-full max-w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

    <Button
      class="w-full h-24"
      tooltip="Increment"
      onclick={(event) =>
        update(({ counter }) => ({
          counter: { value: counter.value + (event.shiftKey ? 10 : 1) },
        }))}
      onhold={(shiftKey) =>
        update(({ counter }) => ({
          counter: { value: counter.value + (shiftKey ? 10 : 1) },
        }))}
      onlonghold={(shiftKey) =>
        update(({ counter }) => ({
          counter: { value: counter.value + (shiftKey ? 25 : 10) },
        }))}
    >
      <IconPlus class="size-8" />
    </Button>
  </div>
</div>
