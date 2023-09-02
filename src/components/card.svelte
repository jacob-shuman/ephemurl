<script lang="ts">
  import * as Icons from "@tabler/icons-svelte";

  export let icon: keyof typeof Icons;
  export let url: string;

  const Icon: any = Icons[icon];
</script>

<a href={url} class="flex flex-col gap-y-2 group">
  <div
    class="bg-tinge dark:bg-bauhaus w-64 h-32 rounded-lg group-hover:-translate-y-2 scale transition-all duration-100 ease-out group-hover:bg-bauhaus group-hover:dark:bg-tinge flex justify-center items-center"
  >
    <svelte:component
      this={Icon}
      class="w-12 h-12 text-grey group-hover:text-tinge group-hover:dark:text-bauhaus"
    />
  </div>

  <div class="flex flex-col gap-y-1">
    <slot />
  </div>
</a>
