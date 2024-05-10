<script lang="ts">
  import { createDb, type Config } from "ephemurl-db";
  import { onMount } from "svelte";
  import { Toaster } from "svelte-sonner";
  import Palette from "./Palette.svelte";
  import Theme from "./Theme.svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: Config;

  const db = createDb(params, { id: "utils" });

  onMount(async () => {
    await db.mount();
  });
</script>

<div class="h-0 w-0 absolute">
  <Toaster />
  <Palette />
  <Theme {ssrConfig} {db} />
</div>
