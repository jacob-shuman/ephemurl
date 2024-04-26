<script lang="ts">
  import { IconMinus, IconPlus } from "@tabler/icons-svelte";
  import { Button } from "ephemurl-utils";
</script>

<div class="flex items-center justify-center gap-x-4">
  <!-- TODO: fix color flashing issue when changing themes -->

  <Button
    tooltip="Decrement"
    onclick={() => {
      // TODO: decrement counter
    }}
  >
    <IconMinus class="h-6 w-6" />
  </Button>

  <div class="h-4 w-0.5 rounded bg-bg-400 dark:bg-bg-dark-400" />

  <Button
    tooltip="Increment"
    onclick={() => {
      // TODO: increment counter
    }}
  >
    <IconPlus class="h-6 w-6" />
  </Button>
</div>
