import { toast as sonnerToast } from "svelte-sonner";
import Button from "./components/Button.svelte";
import Toast from "./components/Toast.svelte";
import Tooltip from "./components/Tooltip.svelte";
import Utils from "./components/Utils.svelte";

export const toast = (message: string) => {
  sonnerToast(Toast, {
    componentProps: { message },
    dismissable: true,
  });
};

export { Button, Tooltip, Utils };
