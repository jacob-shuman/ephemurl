<script lang="ts">
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";

  export let message: string;

  const dispatch = createEventDispatcher();
</script>

<div
  class="w-full rounded bg-white shadow flex items-center justify-between gap-x-2"
>
  <!-- TODO: finish official toast design -->
  <p class="text-base font-bold">
    {message}
  </p>

  <button on:click={() => dispatch("closeToast")}>
    <Icon icon="close" class="size-6" />
  </button>
</div>
