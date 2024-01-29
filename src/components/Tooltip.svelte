<script lang="ts">
  import { Tooltip } from "bits-ui";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let isMounted = false;
  onMount(() => (isMounted = true));

  export let message: string;
</script>

<Tooltip.Root openDelay={250}>
  {#if isMounted}
    <Tooltip.Trigger>
      <slot />
    </Tooltip.Trigger>
  {:else}
    <slot />
  {/if}

  {#if isMounted}
    <Tooltip.Content
      transition={fade}
      transitionConfig={{ duration: 100 }}
      sideOffset={8}
    >
      <div
        class="rounded-lg p-3 font-medium text-sm bg-tinge dark:bg-bauhaus outline-none"
      >
        {message}
      </div>
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
