import { get, writable } from "svelte/store";
import type { Theme } from "./types";

export const theme = writable<Theme>("system");
export const prefersDark = writable<boolean>(false);
export const cycleTheme = () => {
  const currentTheme = get(theme);

  switch (currentTheme) {
    case "system":
      theme.set("light");
      break;
    case "light":
      theme.set("dark");
      break;
    default:
      theme.set("system");
      break;
  }
};
