<script lang="ts">
  import { Tooltip } from "bits-ui";
  import tw from "clsx";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let message: string;
  export let onclick: () => any = () => {};

  let isMounted = false;
  let button: HTMLButtonElement;

  onMount(() => {
    isMounted = true;
  });

  $: if (button) {
    button.onclick = onclick;
  }
</script>

<Tooltip.Root openDelay={250}>
  {#if isMounted}
    <Tooltip.Trigger class={tw($$restProps.class)} bind:el={button}>
      <slot />
    </Tooltip.Trigger>
  {:else}
    <slot />
  {/if}

  {#if isMounted && message}
    <Tooltip.Content
      transition={fade}
      transitionConfig={{ duration: 100 }}
      sideOffset={8}
    >
      <div
        class="rounded-lg p-3 font-medium text-sm bg-tinge dark:bg-bauhaus focus:outline-none"
      >
        {message}
      </div>
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
