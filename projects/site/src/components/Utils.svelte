<script lang="ts">
  import { Toaster } from "svelte-sonner";
  import Theme from "../components/Theme.svelte";
  import type { Params } from "../constants";

  export let searchParams: Params;
</script>

<div class="h-0 w-0 absolute">
  <Toaster />

  <Theme {searchParams} />
</div>
