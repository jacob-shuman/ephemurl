<!-- https://www.bits-ui.com/docs/components/dialog -->
<!-- https://www.npmjs.com/package/@nozbe/microfuzz -->
<script lang="ts">
  import { Dialog } from "bits-ui";
  import { onMount } from "svelte";
  import { PALETTE_TOGGLE_EVENT, type PaletteToggleEvent } from "../constants";

  export let open = false;

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();

      open = !open;
    }
  }

  function togglePalette(e: Event) {
    const { detail } = e as CustomEvent<PaletteToggleEvent>;
    open = detail.opened;
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener(PALETTE_TOGGLE_EVENT, togglePalette);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener(PALETTE_TOGGLE_EVENT, togglePalette);
    };
  });
</script>

<Dialog.Root bind:open>
  <!-- <Dialog.Portal class="absolute"> -->
  <!-- <Dialog.Content
      transition={fade}
      transitionConfig={{ duration: 150 }}
      class="absolute fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded border bg-bg-400 dark:bg-bg-dark-400 p-5 outline-none"
    > -->
  <!-- <Dialog.Close
        class="absolute right-5 top-5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
      > -->
  <!-- <div>
          X
          <span class="sr-only">Close</span>
        </div> -->
  <!-- </Dialog.Close> -->
  <!-- </Dialog.Content> -->
  <!-- </Dialog.Portal> -->
</Dialog.Root>
