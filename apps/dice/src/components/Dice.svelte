<script lang="ts">
  import { DiceSchema } from "@constants";
  import tw from "clsx";
  import { createDb } from "ephemurl-db";
  import { toast } from "ephemurl-utils";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { twMerge } from "tailwind-merge";

  export let dbId: string;
  export let classes: string | undefined;
  export { classes as class };

  const { mount, config, mounted } = createDb({}, DiceSchema, {
    dbId,
  });
  let currentRolls: number;
  let twist = spring(0, { stiffness: 0.1, damping: 0.15 });

  config.subscribe(({ dice }) => {
    if (currentRolls !== dice.rolls) {
      twist.set(Math.PI * 2);
      setTimeout(() => twist.set(0), 100);
      currentRolls = dice.rolls;
    }
  });

  onMount(() => mount());
</script>

<!-- TODO: check why no autofocus and if its ok in this context -->
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
  <button
    class="text-9xl font-black"
    style="transform: rotate({$twist}rad);"
    on:click={() => {
      if ($mounted) {
        navigator.clipboard.writeText($config.dice.value.toString());
        toast(`Copied ${$config.dice.value} to clipboard`);
      }
    }}
  >
    {$config.dice.value}
  </button>
</div>
