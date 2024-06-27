import { SafeConfigSchema } from "ephemurl-db";
import {
  assign,
  defaulted,
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
        value: defaulted(number(), 0),
        title: optional(string()),
      }),
      {}
    ),
  })
);

export type DiceData = Infer<typeof DiceSchema>;
