<script lang="ts">
  import { onMount } from "svelte";
  import { Toaster } from "svelte-sonner";
  import Theme from "../components/Theme.svelte";
  import { type Config } from "../config";
  import { db } from "../db.v3";

  export let ssrConfig: Config;

  // const { config, mount } = db(undefined, (p) => createConfig(p));
  const { config, mount } = db(ssrConfig);

  onMount(async () => {
    // await mount(ssrConfig);
    await mount();

    config.subscribe((n) => {
      // console.log("updated config", n);
    });
  });
</script>

<div class="h-0 w-0 absolute">
  <Toaster />
  <!-- <Palette /> -->
  <Theme config={ssrConfig} />
</div>
