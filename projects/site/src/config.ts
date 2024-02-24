// import { construct, crush } from "radash";

// import * as v from "valibot";

// export const ThemeModeSchema = v.fallback(
//   v.picklist(["light", "dark", "system", "system-dark"] as const),
//   "system-dark"
// );

// export type ThemeMode = v.Input<typeof ThemeModeSchema>;

// export const ThemePropsSchema = v.object({
//   fg: v.object({
//     100: v.string(),
//     200: v.string(),
//     300: v.string(),
//     400: v.string(),
//     500: v.string(),
//   }),
//   bg: v.object({
//     100: v.string(),
//     200: v.string(),
//     300: v.string(),
//     400: v.string(),
//     500: v.string(),
//   }),
// });

// export type ThemeProps = v.Input<typeof ThemePropsSchema>;

// export const ThemeSchema = v.object({
//   radius: v.string(),
//   mode: ThemeModeSchema,
//   light: ThemePropsSchema,
//   dark: ThemePropsSchema,

//   fg: v.object({
//     100: v.string(),
//     200: v.string(),
//     300: v.string(),
//     400: v.string(),
//     500: v.string(),
//   }),
//   bg: v.object({
//     100: v.string(),
//     200: v.string(),
//     300: v.string(),
//     400: v.string(),
//     500: v.string(),
//   }),
// });

// export const ConfigSchema = v.object({
//   theme: ThemeSchema,
// });
// export type Config = v.Input<typeof ConfigSchema>;

// export const ParamsSchema = v.transform(
//   v.object(
//     Object.fromEntries(
//       Object.entries(crush(ConfigSchema)).map(([k, v]) => [
//         k.replaceAll(".", "-"),
//         v,
//       ])
//     )
//   ),
//   //   (p) => {
//   //     const fg = buildPalette(p["theme-fg"] ?? p["theme-fg-light"], 5);
//   //     const fgDark = buildPalette(p["theme-fg"] ?? p["theme-fg-dark"], 5);

//   //     const bg = buildPalette(p["theme-bg"] ?? p["theme-bg-light"], 5);
//   //     const bgDark = buildPalette(p["theme-bg"] ?? p["theme-bg-dark"], 5);

//   //     return {
//   //       theme: {
//   //         borderRadius: p["theme-border-radius"],
//   //         mode: p["theme-mode"],
//   //         light: { fg: { ...fg }, bg: { ...bg } },
//   //         dark: { fg: { ...fgDark }, bg: { ...bgDark } },

//   //         fg,
//   //         bg,
//   //       },
//   //     } as Config;
//   //   }
//   (p) =>
//     construct(
//       Object.fromEntries(
//         Object.entries(p).map(([k, v]) => [k.replaceAll("-", "."), v])
//       )
//     ) as v.Input<typeof ConfigSchema>
// );

import { construct } from "radash";
import {
  coerce,
  defaulted,
  enums,
  mask,
  object,
  optional,
  type Infer,
} from "superstruct";
import { PartialThemeSchema, ThemeSchema } from "./theme";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const ConfigSchema = defaulted(
  object({
    params: defaulted(enums(["show", "hide"]), "hide"),
    theme: ThemeSchema,
  }),
  { params: "hide", theme: {} }
);

// TODO:
const PartialConfigSchema = defaulted(
  object({
    params: optional(enums(["show", "hide"])),
    theme: optional(PartialThemeSchema),
  }),
  {}
);

// consider adding a PartialConfigSchema (or updating ConfigSchema) to have nothing but optionals
// then SafeConfigSchema would take a PartialConfigSchema and fill in the blanks where necessary

const SafeConfigSchema = coerce(ConfigSchema, object(), (c) => {
  const config = c as Config;

  return {
    ...config,

    theme: {
      ...config?.theme,

      light: {
        fg: config?.theme?.fg ?? config?.theme?.light?.fg ?? undefined,
        bg: config?.theme?.bg ?? config?.theme?.light?.bg ?? undefined,
      },
      dark: {
        fg: config?.theme?.fg ?? config?.theme?.dark?.fg ?? undefined,
        bg: config?.theme?.bg ?? config?.theme?.dark?.bg ?? undefined,
      },
    },
  };
});

export type Config = Infer<typeof ConfigSchema>;

// TODO: make sure this works
export const createConfig = (config: DeepPartial<Config>) =>
  mask(
    // TODO: replace construct with my own implementation that uses "-" instead of "." so periods can be included in search params
    construct(
      Object.fromEntries(
        Object.entries(config).map(([k, v]) => [k.replaceAll("-", "."), v])
      )
    ),
    SafeConfigSchema
  );
