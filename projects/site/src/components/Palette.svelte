<!-- https://www.bits-ui.com/docs/components/dialog -->
<script lang="ts">
  import { Drawer } from "vaul-svelte";

  import { onMount } from "svelte";
  import { PALETTE_TOGGLE_EVENT } from "../constants";

  export let open = false;
  let query: string;

  function togglePalette() {
    // TODO: not sure if i should reset this on open
    // if (!open) {
    //   query = "";
    // }

    open = !open;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();

      togglePalette();
    }
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

<Drawer.Root bind:open>
  <!-- rounded bg-bg-500 dark:bg-bg-dark-500 border-t-2 border-bg-400 dark:border-bg-dark-400 -->
  <Drawer.Portal>
    <Drawer.Content
      class="fixed bottom-0 left-0 right-0 mt-24 flex justify-center pt-4 px-4 sm:pt-8 sm:px-8 lg:pt-12 lg:px-12 focus:outline-none"
    >
      <div
        class="rounded-t bg-bg-500 dark:bg-bg-dark-500 border-t-2 border-x-2 border-bg-400 dark:border-bg-dark-400 w-full pt-4 pb-8"
      >
        <!-- Pill -->
        <div
          class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-bg-100 dark:bg-bg-dark-100"
        />

        <!-- placeholder="Search" -->
        <input
          disabled
          class="focus:outline-none px-4 py-2 rounded text-xl bg-transparent w-full"
          placeholder="🚧 Palette Under Construction 🚧"
          bind:value={query}
        />
      </div>
    </Drawer.Content>

    <Drawer.Overlay />
  </Drawer.Portal>
</Drawer.Root>
