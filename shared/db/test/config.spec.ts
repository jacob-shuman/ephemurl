import { assign, defaulted, number, object } from "superstruct";
import { expect, test } from "vitest";
import { SafeConfigSchema, createConfig } from "../src/config";
import { DEFAULT_SAFE_CONFIG } from "./test-constants";

test("createConfig with SafeConfigSchema", () => {
  const config = createConfig({ id: DEFAULT_SAFE_CONFIG.id }, SafeConfigSchema);

  expect(config).toEqual(DEFAULT_SAFE_CONFIG);
});

test("createConfig using derived config with no params", () => {
  const CounterSchema = assign(
    SafeConfigSchema,
    object({ value: defaulted(number(), 0) })
  );

  const config = createConfig({ id: DEFAULT_SAFE_CONFIG.id }, CounterSchema);

  expect(config).toEqual({ ...DEFAULT_SAFE_CONFIG, value: 0 });
});

test("createConfig using derived config with one param", () => {
  const CounterSchema = assign(
    SafeConfigSchema,
    object({ value: defaulted(number(), 0) })
  );

  const config = createConfig(
    { id: DEFAULT_SAFE_CONFIG.id, value: 742 },
    CounterSchema
  );

  expect(config).toEqual({ ...DEFAULT_SAFE_CONFIG, value: 742 });
});
