import { construct } from "radash";
import {
  boolean,
  coerce,
  defaulted,
  enums,
  mask,
  object,
  optional,
  string,
  type Infer,
  type Struct,
} from "superstruct";
import { ThemeSchema } from "./theme.ts";
import { generateId } from "./utils.ts";

export type PartialConfig<T> = {
  [P in keyof T]?: PartialConfig<T[P]>;
};

export const BaseConfigSchema = defaulted(
  object({
    id: defaulted(string(), generateId), // TODO: i need to include the id so the database will persist across page reloads, im not sure why its coming through as undefined, run the dev command with --verbose
    reset: optional(boolean()),
    params: defaulted(enums(["show", "hide"]), "hide"),
    theme: ThemeSchema,
  }),
  { params: "hide", theme: {} }
);

export type BaseConfig = Infer<typeof BaseConfigSchema>;

export const SafeConfigSchema = coerce(BaseConfigSchema, object(), (c) => {
  const config = c as BaseConfig;

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

export type SafeConfig = Infer<typeof BaseConfigSchema>;

export const createConfig = <C extends BaseConfig>(
  // TODO: not sure if i should add record ie: config: PartialConfig<C> & Record<string, string>,
  config: PartialConfig<C>,
  schema: Struct<C>
) => mask({ ...config, ...mask(construct(config), SafeConfigSchema) }, schema);
