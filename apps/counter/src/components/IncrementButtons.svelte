<script lang="ts">
  import { CounterSchema } from "@constants";
  import { IconMinus, IconPlus } from "@tabler/icons-svelte";
  import { createDb } from "ephemurl-db";
  import { Button } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let dbId: string;

  const { mount, update } = createDb({}, CounterSchema, { dbId });

  onMount(() => {
    mount();
  });
</script>

<div class="flex items-center justify-center gap-x-4">
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
    <IconMinus class="size-6" />
  </Button>

  <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-400" />

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
    <IconPlus class="size-6" />
  </Button>
</div>
