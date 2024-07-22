import { SafeConfigSchema } from "ephemurl-db";
import { assign, defaulted, object, type Infer } from "superstruct";

export const APP_CAPITALIZED_IDSchema = assign(
  SafeConfigSchema,
  object({
    APP_ID: defaulted(object({}), {}),
  })
);

export type APP_CAPITALIZED_IDData = Infer<typeof APP_CAPITALIZED_IDSchema>;
