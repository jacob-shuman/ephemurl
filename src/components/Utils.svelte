<script lang="ts">
  import { Toaster } from "svelte-sonner";
  import Theme from "../components/Theme.svelte";

  export let theme = "system-dark";
</script>

<div class="h-0 w-0 absolute">
  <Toaster />

  <Theme {theme} />
</div>
