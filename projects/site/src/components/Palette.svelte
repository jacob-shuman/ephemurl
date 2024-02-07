<script lang="ts">
  import { Dialog } from "bits-ui";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let open = false;

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();

      open = !open;
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

{#if open}
  <Dialog.Root bind:open>
    <Dialog.Portal>
      <Dialog.Overlay
        transition={fade}
        transitionConfig={{ duration: 12 }}
        class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      />

      <Dialog.Content
        transition={fade}
        class="fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded border bg-background p-5 shadow-popover outline-none sm:max-w-[490px] md:w-full"
      >
        <Dialog.Close
          class="absolute right-5 top-5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
        >
          <div>
            X
            <span class="sr-only">Close</span>
          </div>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
{/if}
