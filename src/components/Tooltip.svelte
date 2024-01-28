<script lang="ts">
  import { Tooltip } from "bits-ui";
  import { fade } from "svelte/transition";

  export let message: string;
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    <slot />
  </Tooltip.Trigger>

  <Tooltip.Content
    transition={fade}
    transitionConfig={{ duration: 150 }}
    sideOffset={8}
  >
    <Tooltip.Arrow class="rounded-[2px] border-l border-t border-dark-10" />

    <div
      class="flex items-center justify-center rounded-input border border-dark-10 bg-background p-3 text-sm font-medium shadow-popover outline-none"
    >
      {message}
    </div>
  </Tooltip.Content>
</Tooltip.Root>
