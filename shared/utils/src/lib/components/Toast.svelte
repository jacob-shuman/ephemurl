<script lang="ts">
  import { IconX } from "@tabler/icons-svelte";
  import { createEventDispatcher } from "svelte";

  export let message: string;

  const dispatch = createEventDispatcher();
</script>

<div
  class="w-full rounded bg-bg-100 text-bg-500 dark:bg-bg-dark-100 dark:text-bg-dark-500 shadow flex items-center justify-between gap-x-2 px-4 py-2"
>
  <!-- TODO: finish official toast design -->
  <p class="text-base font-bold">
    {message}
  </p>

  <button on:click={() => dispatch("closeToast")}>
    <IconX class="size-6" />
  </button>
</div>
