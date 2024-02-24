import { toast as sonnerToast } from "svelte-sonner";
import Toast from "./components/Toast.svelte";

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const toast = (message: string) => {
  sonnerToast(Toast, {
    componentProps: { message },
    dismissable: true,
  });
};
