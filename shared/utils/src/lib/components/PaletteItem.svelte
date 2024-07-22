<script lang="ts">
  import { Button } from "$lib";
  import type { PaletteItemProps } from "$lib/types";
  import {
    IconCheck,
    IconChevronRight,
    IconExternalLink,
  } from "@tabler/icons-svelte";
  import tw from "clsx";

  export let index: number;
  export let item: PaletteItemProps;
  export let onSelect: (item: PaletteItemProps) => void;
  export let selected: boolean;
</script>

{#if item.section}
  <p
    class={tw(
      "text-sm text-bg-300 dark:text-bg-dark-300",
      index !== 0 && "mt-4"
    )}
  >
    {item.section}
  </p>
{/if}

<Button
  onactive={(buttonElement) => {
    buttonElement?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }}
  onfocus={(event) => {
    event.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }}
  onclick={() => onSelect(item)}
  active={selected}
  class="w-full justify-between px-4 py-2 gap-x-2"
  disabled={item.disabled}
>
  <div class="flex gap-x-2 items-center">
    <svelte:component this={item.icon} />

    <div class="flex flex-col text-start">
      <span class="capitalize">
        {item.label}
      </span>

      {#if item.description}
        <small class="enabled:text-bg-300 dark:enabled:text-bg-dark-300">
          {item.description}
        </small>
      {/if}
    </div>
  </div>

  {#if !item.disabled}
    {#if item.type === "link"}
      <IconExternalLink />
    {:else if item.type === "menu"}
      <IconChevronRight />
    {:else if item.type === "checkbox" && item.isChecked}
      <IconCheck />
    {/if}
  {/if}
</Button>

{#if item.underline}
  <hr class="mx-4 border-bg-300 dark:border-bg-dark-300" />
{/if}
