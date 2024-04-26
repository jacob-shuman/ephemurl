<script lang="ts">
  import { db as createDb, type Config } from "ephemurl-db";
  import { onMount } from "svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: Config;

  const { config, update, mount } = createDb(params, { id: "badge" });

  onMount(() => {
    // url.set(new URL(window.location.href));
    mount();
  });
</script>

{JSON.stringify($config)}
