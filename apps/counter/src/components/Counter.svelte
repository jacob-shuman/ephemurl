<script lang="ts">
  import { CounterSchema } from "@constants";
  import tw from "clsx";
  import { createDb } from "ephemurl-db";
  import { onMount } from "svelte";

  export let dbId: string;
  export let classes: string | undefined;
  export { classes as class };

  const { mount, update, config, mounted } = createDb({}, CounterSchema, {
    dbId,
  });

  onMount(() => mount());
</script>

<!-- TODO: check why no autofocus and if its ok in this context -->
<!-- TODO: does it actually help to have class:opacity like that? -->
<input
  autofocus
  type="number"
  class={tw(
    "w-full text-center text-9xl font-black focus:outline-none bg-transparent",
    "duration-200 transition-opacity ease-out bg-blue-500",
    classes
  )}
  class:opacity-100={$mounted}
  class:opacity-0={!$mounted}
  value={$config.counter.value ?? undefined}
  on:change={(event) => {
    if (event.currentTarget.value.length < 1) {
      event.currentTarget.value = "0";
    }

    update({
      counter: { value: Number(event.currentTarget.value ?? 0) },
    });
  }}
  on:keydown={(event) => {
    if (event.key === "ArrowUp") {
      event.currentTarget.value = (
        Number(event.currentTarget.value) + (event.shiftKey ? 9 : 0)
      ).toString();
    } else if (event.key === "ArrowDown") {
      event.currentTarget.value = (
        Number(event.currentTarget.value) - (event.shiftKey ? 9 : 0)
      ).toString();
    }
  }}
/>

<style>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
