import { SafeConfigSchema } from "ephemurl-db";
import {
  assign,
  boolean,
  defaulted,
  enums,
  min,
  number,
  object,
  optional,
  string,
  type Infer,
} from "superstruct";

export const DiceSchema = assign(
  SafeConfigSchema,
  object({
    dice: defaulted(
      object({
        rolls: defaulted(min(number(), 0), 0),
        max: defaulted(min(number(), 2), 6),
        value: defaulted(number(), 1),
        title: optional(string()),
        forceUnique: defaulted(boolean(), false),
        animation: defaulted(enums(["twist", "none"]), "twist"),
        glyphs: defaulted(enums(["auto", "numbers"]), "auto"),
      }),
      {}
    ),
  })
);

export type DiceData = Infer<typeof DiceSchema>;
