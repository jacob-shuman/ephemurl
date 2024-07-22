<script lang="ts" generics="Config extends BaseConfig">
  import { createConfirmPaletteMenu, type PaletteItemProps } from "$lib";
  import {
    IconCube,
    IconDeviceDesktop,
    IconMoonFilled,
    IconPalette,
    IconPlus,
    IconSunFilled,
    IconSwitchHorizontal,
    IconTrash,
  } from "@tabler/icons-svelte";
  import {
    BaseConfigSchema,
    clearSessions,
    generateId,
    getSessions,
    type BaseConfig,
    type Database,
  } from "ephemurl-db";
  import { onMount } from "svelte";
  import { Toaster } from "svelte-sonner";
  import Palette from "./Palette.svelte";
  import Theme from "./Theme.svelte";

  export let ssrConfig: any;
  export let db: Database<Config>;
  export let paletteItems: PaletteItemProps[];

  let sessions: BaseConfig[] = [];
  let startingPaletteItems: PaletteItemProps[] = [];
  $: ({ config, update } = db);

  onMount(() => {
    sessions = getSessions(BaseConfigSchema);
    startingPaletteItems = [
      {
        type: "button",
        icon: IconPlus,
        label: "New Session",
        section: "Sessions",
        onClick: () => {
          window.location.assign(`/?id=${generateId()}`);
        },
      },
      {
        type: "menu",
        icon: IconSwitchHorizontal,
        label: "Switch Session",
        description: "Use a stored session's values",
        children: sessions.map((s) => ({
          type: "link",
          icon: IconCube,
          label: s.id,
          description: `Created at ${s.createdAt.toDateString()}`,
          url: `/?id=${s.id}`,
        })),
      },
      createConfirmPaletteMenu({
        question: "Are you sure you want to delete all sessions?",
        onResponse: (response: boolean) => {
          if (response) {
            clearSessions();
            window.location.assign("/");
          }
        },
        itemProps: {
          icon: IconTrash,
          label: "Clear Sessions",
          description: "This will irreversibly delete all sessions!",
        },
      }),
    ];
  });
</script>

<div class="size-0 absolute">
  <Toaster />
  <Theme {ssrConfig} {db} />
  <Palette
    items={[
      ...startingPaletteItems,
      ...paletteItems,

      {
        type: "menu",
        icon: IconPalette,
        label: "Change Theme",
        section: "Settings",
        children: [
          {
            type: "checkbox",
            icon: IconDeviceDesktop,
            label: "System",
            isChecked:
              $config.theme.mode === "system" ||
              $config.theme.mode === "system-dark",
            onToggle: () => {
              update({
                theme: { mode: "system" },
              });
            },
          },
          {
            type: "checkbox",
            icon: IconMoonFilled,
            label: "Dark",
            isChecked: $config.theme.mode === "dark",
            onToggle: () => {
              update({
                theme: { mode: "dark" },
              });
            },
          },
          {
            type: "checkbox",
            icon: IconSunFilled,
            label: "Light",
            isChecked: $config.theme.mode === "light",
            onToggle: () => {
              update({
                theme: { mode: "light" },
              });
            },
          },
        ],
      },
    ]}
  />
</div>
