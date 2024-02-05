<script lang="ts">
  export let url: string;
</script>

{#if url}
  <div class="h-full w-full flex flex-col">
    <div
      class="bg-red-500 rounded-t h-2 hover:h-4 transition-all duration-100 ease-out"
    ></div>
    <iframe src={url} class="flex-grow" title="test" />
  </div>
{/if}
