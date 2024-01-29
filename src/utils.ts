import { toast as sonnerToast } from "svelte-sonner";
import Toast from "./components/Toast.svelte";

export const toast = () => {
  sonnerToast(Toast);
};
