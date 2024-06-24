import { SafeConfigSchema } from "ephemurl-db";
import {
  assign,
  defaulted,
  number,
  object,
  optional,
  string,
  type Infer,
} from "superstruct";

export const CounterSchema = assign(
  SafeConfigSchema,
  object({
    counter: defaulted(
      object({ value: defaulted(number(), 0), title: optional(string()) }),
      {}
    ),
  })
);

export type CounterData = Infer<typeof CounterSchema>;
