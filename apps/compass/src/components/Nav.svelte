<script lang="ts">
  import {
    CompassSchema,
    permissionState,
    requestPermission,
  } from "@constants";
  import { createDb, type BaseConfig } from "ephemurl-db";
  import { Utils } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let params: Record<string, string | object>;
  export let ssrConfig: BaseConfig;

  const db = createDb(CompassSchema, { params, dbId: ssrConfig.id });
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

    permissionState.set(await requestPermission());
  });
</script>

<Utils {ssrConfig} {db} />
