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

const PartialConfigSchema = defaulted(
  object({
    params: optional(enums(["show", "hide"])),
    theme: optional(PartialThemeSchema),
  }),
  {}
);

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
export type PartialConfig = Infer<typeof PartialConfigSchema>;

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
