<script lang="ts">
  import { Tooltip } from "bits-ui";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let message: string;

  let isMounted = false;

  onMount(() => {
    isMounted = true;
  });
</script>

<Tooltip.Root openDelay={250}>
  <slot />

  {#if isMounted && message}
    <Tooltip.Content
      transition={fade}
      transitionConfig={{ duration: 100 }}
      sideOffset={8}
    >
      <div
        class="rounded p-3 font-medium text-sm bg-bg-400 text-bg-100 dark:bg-bg-dark-400 dark:text-bg-dark-100 focus:outline-none"
      >
        {message}
      </div>
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
