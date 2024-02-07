import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);
extend([a11yPlugin]);

export function buildPalette(base: string, count: number) {
  const color = colord(base);

  return (
    color.isDark()
      ? color.tints(count).reverse()
      : color.shades(count).reverse()
  ).reduce((a, c, i) => ({ ...a, [(i + 1) * 100]: c.toHslString() }), {}) as {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  };
}

export function buildTheme(params: Params): Record<string, string> {
  return {
    "--theme-border-radius": params.theme.borderRadius,

    "--theme-fg-100": params.theme.fg[100],
    "--theme-fg-200": params.theme.fg[200],
    "--theme-fg-300": params.theme.fg[300],
    "--theme-fg-400": params.theme.fg[400],
    "--theme-fg-500": params.theme.fg[500],

    "--theme-bg-100": params.theme.bg[100],
    "--theme-bg-200": params.theme.bg[200],
    "--theme-bg-300": params.theme.bg[300],
    "--theme-bg-400": params.theme.bg[400],
    "--theme-bg-500": params.theme.bg[500],

    "--theme-fg-dark-100": params.theme.dark.fg[100],
    "--theme-fg-dark-200": params.theme.dark.fg[200],
    "--theme-fg-dark-300": params.theme.dark.fg[300],
    "--theme-fg-dark-400": params.theme.dark.fg[400],
    "--theme-fg-dark-500": params.theme.dark.fg[500],

    "--theme-bg-dark-100": params.theme.dark.bg[100],
    "--theme-bg-dark-200": params.theme.dark.bg[200],
    "--theme-bg-dark-300": params.theme.dark.bg[300],
    "--theme-bg-dark-400": params.theme.dark.bg[400],
    "--theme-bg-dark-500": params.theme.dark.bg[500],
  };
}
