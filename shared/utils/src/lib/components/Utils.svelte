<script lang="ts" generics="Config extends BaseConfig">
  import { type BaseConfig, type Database } from "ephemurl-db";
  import { Toaster } from "svelte-sonner";
  import Theme from "./Theme.svelte";

  export let ssrConfig: any;
  export let db: Database<Config>;
</script>

<div class="size-0 absolute">
  <Toaster />
  <Theme {ssrConfig} {db} />
</div>
