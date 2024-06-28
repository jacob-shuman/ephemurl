<script lang="ts">
  import { DiceSchema } from "@constants";
  import { IconRefresh } from "@tabler/icons-svelte";
  import { createDb } from "ephemurl-db";
  import { Button } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let dbId: string;

  const { mounted, config, mount, update } = createDb({}, DiceSchema, { dbId });

  const reroll = (max?: number) => {
    update(({ dice }) => {
      const newMax = max !== undefined ? max : dice.max;
      let newValue = Math.floor(Math.random() * (newMax - 1 + 1)) + 1;

      if ($config.dice.forceUnique) {
        while (dice.value === newValue) {
          newValue = Math.floor(Math.random() * (newMax - 1 + 1)) + 1;
        }
      }

      return {
        dice: {
          rolls: dice.rolls + 1,
          max: newMax,
          value: newValue,
        },
      };
    });
  };

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
      active={$config.dice.max === 4}
      class="w-full flex-1 min-h-8"
      tooltip="D4"
      onclick={() => reroll(4)}
      onhold={() => reroll(4)}
      onlonghold={() => reroll(4)}
    >
      D4
    </Button>

    <div
      class="h-4 w-full max-w-0.5 rounded rotate-90 sm:rotate-0 bg-bg-400 dark:bg-bg-dark-400"
    />

    <Button
      active={$config.dice.max === 6}
      class="w-full flex-1 min-h-8"
      tooltip="D6"
      onclick={() => reroll(6)}
      onhold={() => reroll(6)}
      onlonghold={() => reroll(6)}
    >
      D6
    </Button>

    <div
      class="h-4 w-full max-w-0.5 rounded rotate-90 sm:rotate-0 bg-bg-400 dark:bg-bg-dark-400"
    />

    <Button
      active={$config.dice.max === 10}
      class="w-full flex-1 min-h-8"
      tooltip="D10"
      onclick={() => reroll(10)}
      onhold={() => reroll(10)}
      onlonghold={() => reroll(10)}
    >
      D10
    </Button>

    <div
      class="h-4 w-full max-w-0.5 rounded rotate-90 sm:rotate-0 bg-bg-400 dark:bg-bg-dark-400"
    />

    <Button
      active={$config.dice.max === 20}
      class="w-full flex-1 min-h-8"
      tooltip="D20"
      onclick={() => reroll(20)}
      onhold={() => reroll(20)}
      onlonghold={() => reroll(20)}
    >
      D20
    </Button>
  </div>

  <Button
    class="w-full h-24 flex items-center justify-center gap-x-2"
    tooltip="Reroll"
    onclick={() => reroll()}
    onhold={() => reroll()}
    onlonghold={() => reroll()}
  >
    <span class="text-xl font-bold">Reroll</span>
    <IconRefresh class="size-8" />
  </Button>
</div>
