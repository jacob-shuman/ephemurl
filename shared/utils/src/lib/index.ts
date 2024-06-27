import tw from "clsx";
import { toast as sonnerToast } from "svelte-sonner";
import { twMerge } from "tailwind-merge";
import AlertDialog from "./components/AlertDialog.svelte";
import Button from "./components/Button.svelte";
import Toast from "./components/Toast.svelte";
import Tooltip from "./components/Tooltip.svelte";
import Utils from "./components/Utils.svelte";

export const toast = (message: string) => {
  const id = sonnerToast.custom(Toast, {
    unstyled: true,
    class: "w-full",
    componentProps: { message },
    dismissable: true,
  });

  return { dismiss: () => sonnerToast.dismiss(id) };
};

export const generateButtonClasses = (options: {
  active?: boolean;
  classes?: string;
}) =>
  twMerge(
    tw(
      "select-none cursor-pointer size-12 flex justify-center items-center rounded",
      "transition-all duration-100 ease-out",
      "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100",
      "focus:outline-none ring-1 ring-transparent ring-offset-2 ring-offset-bg-500 dark:ring-offset-bg-dark-500 focus:ring-bg-100 focus:dark:ring-bg-dark-100",
      "active:bg-bg-500 active:text-bg-100 active:dark:bg-bg-dark-500 active:dark:text-bg-dark-100",
      {
        "bg-fg-500 dark:bg-fg-dark-500 text-fg-100 dark:text-fg-dark-100":
          options.active,
        "hover:bg-fg-500 hover:dark:bg-fg-dark-500 hover:text-fg-100 hover:dark:text-fg-dark-100":
          !options.active,
      }
    ),
    options.classes
  );

export { AlertDialog, Button, Tooltip, Utils };
