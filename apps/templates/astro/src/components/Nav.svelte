<script lang="ts">
  import { APP_CAPITALIZED_IDSchema } from "@constants";
  import { createDb, type BaseConfig } from "ephemurl-db";
  import { Utils } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: BaseConfig;

  const db = createDb(APP_CAPITALIZED_IDSchema, { params, dbId: ssrConfig.id });
  $: ({ config, update, mount } = db);
  onMount(async () => {
    mount();

    if (
      ($config ?? ssrConfig).theme.mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: { mode: "system-dark" } });
    } else if (
      ($config ?? ssrConfig).theme.mode === "system-dark" &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      update({ theme: { mode: "system" } });
    }
  });
</script>

<Utils {ssrConfig} {db} />
