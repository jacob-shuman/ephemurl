import { IconCheck, IconX } from "@tabler/icons-svelte";
import { toast as sonnerToast } from "svelte-sonner";
import Toast from "./components/Toast.svelte";
import type { PaletteItemProps } from "./types";

/**
 * Toasts a message using svelte-sonner and the Toast component
 */
export const toast = (message: string) => {
  const id = sonnerToast.custom(Toast, {
    unstyled: true,
    class: "w-full",
    componentProps: { message },
    dismissable: true,
  });

  return { dismiss: () => sonnerToast.dismiss(id) };
};

/**
 * @returns a PaletteItemProps with type menu and yes/no children items
 */
export const createConfirmPaletteMenu = (args: {
  question: string;
  onResponse: (response: boolean) => void;
  itemProps: Partial<PaletteItemProps> &
    Required<Pick<PaletteItemProps, "label" | "icon">>;
}): PaletteItemProps => ({
  ...args.itemProps,
  type: "menu",
  hideBackButton: true,
  children: [
    {
      type: "button",
      label: "No",
      icon: IconX,
      section: args.question,
      onClick: () => {
        args.onResponse(false);
        return { goBack: true };
      },
    },
    {
      type: "button",
      label: "Yes",
      icon: IconCheck,
      onClick: () => {
        args.onResponse(true);
        return { goBack: true };
      },
    },
  ],
});

export { default as AlertDialog } from "./components/AlertDialog.svelte";
export { default as Button } from "./components/Button.svelte";
export { default as Palette } from "./components/Palette.svelte";
export { default as PaletteItem } from "./components/PaletteItem.svelte";
export { default as Tooltip } from "./components/Tooltip.svelte";
export { default as Utils } from "./components/Utils.svelte";
export * from "./types";
