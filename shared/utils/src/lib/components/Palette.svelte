<script lang="ts">
  import { PaletteItem, type PaletteItemProps } from "$lib";
  import { shortcut, type ShortcutEventDetail } from "@svelte-put/shortcut";
  import { IconArrowBackUp } from "@tabler/icons-svelte";
  import { PALETTE_TOGGLE_EVENT } from "ephemurl-db";
  import Flexsearch from "flexsearch";
  import { onMount } from "svelte";
  import { Drawer } from "vaul-svelte";

  export let items: PaletteItemProps[];
  export let open = false;

  let currentItems: PaletteItemProps[][] = [items];
  let selectedIndex = 0;
  let query: string;
  let index = new Flexsearch.Index({ tokenize: "full" });
  let results: PaletteItemProps[] = items;
  let searchBar: HTMLInputElement;

  function onSelect(item: PaletteItemProps) {
    if (!item.disabled) {
      switch (item.type) {
        case "button":
          const clickResult = item.onClick();

          if (typeof clickResult === "object" && clickResult.goBack) {
            goBack();
          }
          break;
        case "link":
          window.location.assign(item.url);
          break;
        case "menu":
          currentItems = [
            ...currentItems,
            item.hideBackButton
              ? item.children
              : [
                  {
                    type: "button",
                    icon: IconArrowBackUp,
                    label: "Go Back",
                    onClick: () => goBack(),
                    underline: item.children.length > 0,
                  } as PaletteItemProps,
                  ...item.children,
                ],
          ];
          break;
        case "checkbox":
          const toggleResult = item.onToggle(item.isChecked);

          if (typeof toggleResult === "object" && toggleResult.goBack) {
            goBack();
          }

          break;
      }
    }
  }

  function toggleOpen() {
    open = !open;

    if (open) {
      setTimeout(() => {
        searchBar?.focus();
      }, 50);
    }
  }

  function goBack() {
    query = "";
    currentItems.pop();
    currentItems = currentItems;
  }

  $: {
    currentItems = [items];
  }

  $: {
    if (query && query.length > 0) {
      const queryResults = index.search(query);

      results = currentItems[currentItems.length - 1].filter((i) =>
        queryResults.some((r) => r === i.label)
      );
    } else {
      results = currentItems[currentItems.length - 1];
    }

    selectedIndex = 0;
  }

  $: {
    index = new Flexsearch.Index({ tokenize: "full" });

    for (let i of currentItems[currentItems.length - 1]) {
      index.add(i.label, i.label);
    }
  }

  onMount(() => {
    const togglePaletteHandler = () => {
      if (!open) {
        toggleOpen();
      }
    };

    window.addEventListener(PALETTE_TOGGLE_EVENT, togglePaletteHandler);

    return () => {
      window.removeEventListener(PALETTE_TOGGLE_EVENT, togglePaletteHandler);
    };
  });

  const onShortcut = (event: CustomEvent<ShortcutEventDetail>) => {
    const keyboardEvent = event.detail.originalEvent;

    keyboardEvent.preventDefault();

    if (
      keyboardEvent.key === "k" &&
      (keyboardEvent.ctrlKey || keyboardEvent.metaKey)
    ) {
      toggleOpen();
    }
  };
</script>

<svelte:window
  use:shortcut={{
    trigger: [
      {
        key: "k",
        modifier: ["ctrl", "meta"],
      },
      {
        key: "Enter",
        callback: () => {
          query = "";
          onSelect(results[selectedIndex]);
        },
      },
      {
        key: "ArrowUp",
        callback: ({ originalEvent }) => {
          if (originalEvent.shiftKey) {
            selectedIndex = 0;
          } else {
            selectedIndex =
              selectedIndex > 0 ? selectedIndex - 1 : results.length - 1;
          }
        },
      },
      {
        key: "ArrowDown",
        callback: ({ originalEvent }) => {
          if (originalEvent.shiftKey) {
            selectedIndex = results.length - 1;
          } else {
            selectedIndex =
              selectedIndex < results.length - 1 ? selectedIndex + 1 : 0;
          }
        },
      },
      {
        key: "ArrowLeft",
        callback: () => {
          if (currentItems.length > 1) {
            goBack();
          } else {
            open = false;
          }
        },
      },
      {
        key: "ArrowRight",
        callback: () => {
          query = "";
          onSelect(results[selectedIndex]);
        },
      },
    ],
  }}
  on:shortcut={onShortcut}
/>

<Drawer.Root bind:open>
  <Drawer.Portal>
    <Drawer.Content
      class="fixed bottom-0 left-0 right-0 mt-24 flex justify-center pt-4 sm:pt-8 sm:px-8 lg:pt-12 lg:px-12 focus:outline-none"
    >
      <div
        class="rounded-t bg-bg-500 dark:bg-bg-dark-500 border-t-2 sm:border-x-2 border-bg-400 dark:border-bg-dark-400 w-full pt-4 px-4"
      >
        <!-- Pill -->
        <div
          class="mx-auto mb-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-bg-100 dark:bg-bg-dark-100"
        />

        <div
          class="flex flex-col py-2 gap-y-2 max-h-[75dvh] overflow-y-scroll pr-4 scrollbar scrollbar-track-transparent"
        >
          {#each results as item, index}
            <PaletteItem
              {index}
              {item}
              {onSelect}
              selected={selectedIndex === index}
            />
          {/each}
        </div>

        <div class="flex flex-col gap-y-2 py-2">
          <input
            class="focus:outline-none rounded text-xl bg-transparent w-full"
            placeholder="Search"
            bind:value={query}
            bind:this={searchBar}
          />

          <small class="text-bg-300 dark:text-bg-dark-300">
            Use &#x25B2; and &#x25BC; to change selection, &#x25C0; to go back a
            page, and &#x25B6; to select an item.
          </small>
        </div>
      </div>
    </Drawer.Content>

    <Drawer.Overlay />
  </Drawer.Portal>
</Drawer.Root>
