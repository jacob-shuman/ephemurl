import type { IconBadgeFilled } from "@tabler/icons-svelte";

export type PaletteItemClickHandlerReturn = { goBack?: boolean } | void;

export type PaletteItemType =
  | { type: "button"; onClick: () => PaletteItemClickHandlerReturn }
  | { type: "link"; url: string }
  | {
      type: "checkbox";
      isChecked: boolean;
      onToggle: (state: boolean) => PaletteItemClickHandlerReturn;
    }
  | { type: "menu"; children: PaletteItemProps[]; hideBackButton?: boolean };

export type PaletteItemProps = {
  icon: typeof IconBadgeFilled;
  label: string;
  description?: string;
  section?: string;
  underline?: boolean;
  disabled?: boolean;
} & PaletteItemType;
