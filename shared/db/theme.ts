import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import {
  coerce,
  defaulted,
  enums,
  object,
  optional,
  string,
  union,
  type Infer,
} from "superstruct";
import { type Config } from "./config";

extend([mixPlugin, a11yPlugin, namesPlugin]);

export function buildPalette(base: string, count = 5) {
  const color = colord(base);

  return (
    color.isDark()
      ? color.tints(count).reverse()
      : color.shades(count).reverse()
  ).reduce(
    (a, c, i) => ({
      ...a,
      [(i + 1) * 100]: c.toHex(),
    }),
    {}
  ) as {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  };
}

const color = coerce(string(), string(), (value) => colord(value).toHex());

const ColorSchemeSchema = object({
  100: color,
  200: color,
  300: color,
  400: color,
  500: color,
});

const ColorPaletteSchema = coerce(
  ColorSchemeSchema,
  union([string(), ColorSchemeSchema]),
  (value) => {
    if (typeof value === "string") {
      return buildPalette(value);
    }

    return value;
  }
);

const ThemeModeSchema = enums(["light", "dark", "system", "system-dark"]);

export type ThemeMode = Infer<typeof ThemeModeSchema>;

export const ThemeSchema = object({
  radius: defaulted(string(), "0.5rem"),
  mode: defaulted(ThemeModeSchema, "system-dark"),
  light: defaulted(
    object({
      fg: ColorPaletteSchema,
      bg: ColorPaletteSchema,
    }),
    { fg: buildPalette("#000000"), bg: buildPalette("#FFFFFF") }
  ),
  dark: defaulted(
    object({
      fg: ColorPaletteSchema,
      bg: ColorPaletteSchema,
    }),
    { fg: buildPalette("#FFFFFF"), bg: buildPalette("#000000") }
  ),
  fg: optional(ColorPaletteSchema),
  bg: optional(ColorPaletteSchema),
});

export const PartialThemeSchema = object({
  radius: optional(string()),
  mode: optional(ThemeModeSchema),
  light: optional(
    object({
      fg: ColorPaletteSchema,
      bg: ColorPaletteSchema,
    })
  ),
  dark: optional(
    object({
      fg: ColorPaletteSchema,
      bg: ColorPaletteSchema,
    })
  ),
  fg: optional(ColorPaletteSchema),
  bg: optional(ColorPaletteSchema),
});

const getHsl = (color: string) => {
  const { h, s, l } = colord(color).toHsl();

  return `${h}deg ${s}% ${l}%`;
};

export function buildTheme(config: Config) {
  return {
    "--theme-radius": config.theme.radius,

    "--theme-fg-100": getHsl(config.theme.light.fg[100]),
    "--theme-fg-200": getHsl(config.theme.light.fg[200]),
    "--theme-fg-300": getHsl(config.theme.light.fg[300]),
    "--theme-fg-400": getHsl(config.theme.light.fg[400]),
    "--theme-fg-500": getHsl(config.theme.light.fg[500]),

    "--theme-bg-100": getHsl(config.theme.light.bg[100]),
    "--theme-bg-200": getHsl(config.theme.light.bg[200]),
    "--theme-bg-300": getHsl(config.theme.light.bg[300]),
    "--theme-bg-400": getHsl(config.theme.light.bg[400]),
    "--theme-bg-500": getHsl(config.theme.light.bg[500]),

    "--theme-fg-dark-100": getHsl(config.theme.dark.fg[100]),
    "--theme-fg-dark-200": getHsl(config.theme.dark.fg[200]),
    "--theme-fg-dark-300": getHsl(config.theme.dark.fg[300]),
    "--theme-fg-dark-400": getHsl(config.theme.dark.fg[400]),
    "--theme-fg-dark-500": getHsl(config.theme.dark.fg[500]),

    "--theme-bg-dark-100": getHsl(config.theme.dark.bg[100]),
    "--theme-bg-dark-200": getHsl(config.theme.dark.bg[200]),
    "--theme-bg-dark-300": getHsl(config.theme.dark.bg[300]),
    "--theme-bg-dark-400": getHsl(config.theme.dark.bg[400]),
    "--theme-bg-dark-500": getHsl(config.theme.dark.bg[500]),
  };
}
