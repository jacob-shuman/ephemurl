<script lang="ts">
  import { onMount } from "svelte";
  import Grid, { GridItem } from "svelte-grid-extended";
  import Iframe from "./Iframe.svelte";

  let isMounted = false;

  onMount(() => {
    isMounted = true;
  });
</script>

{#if isMounted}
  <Grid cols={4} rows={4}>
    <!-- <GridItem
      x={0}
      y={0}
      h={1}
      movable={true}
      resizable={true}
      class="border-2 border-red-500"
    >
      Hey
    </GridItem> -->

    <GridItem x={0} y={0} w={4} h={4}>
      <Iframe url="https://ephm.app/" />
    </GridItem>
  </Grid>
{/if}
