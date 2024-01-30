import { toast as sonnerToast } from "svelte-sonner";
import Toast from "./components/Toast.svelte";

export const toast = (message: string) => {
  sonnerToast(Toast, {
    componentProps: { message },
    dismissable: true,
  });
};
