import { toast as sonnerToast } from "svelte-sonner";
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

export { AlertDialog, Button, Tooltip, Utils };
