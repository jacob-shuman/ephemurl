<script lang="ts">
  import { onMount } from "svelte";
  import { Toaster } from "svelte-sonner";
  import Palette from "../components/Palette.svelte";
  import Theme from "../components/Theme.svelte";
  import { type Config } from "../config";
  import { db as createDb } from "../db.v3";

  export let params: Record<string, string | object>;
  export let ssrConfig: Config;

  const db = createDb(params, { id: "utils" });

  onMount(async () => {
    await db.mount();
  });
</script>

<div class="h-0 w-0 absolute">
  <Toaster />
  <Theme {ssrConfig} {db} />
  <Palette />
</div>
