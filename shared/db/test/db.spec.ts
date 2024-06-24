import { assign, defaulted, number, object } from "superstruct";
import { expect, test } from "vitest";
import { SafeConfigSchema } from "../src/config";
import { DATABASE_UPDATE_EVENT } from "../src/constants";
import { createDb } from "../src/db";
import { DEFAULT_SAFE_CONFIG } from "./test-constants";

test("createDb with SafeConfigSchema", () => {
  const dbId = DEFAULT_SAFE_CONFIG.id;
  const { mount, mounted, config } = createDb({}, SafeConfigSchema, {
    dbId,
  });

  mount();

  expect(mounted.get()).toEqual(true);
  expect(localStorage.getItem(dbId)).toEqual(
    JSON.stringify(DEFAULT_SAFE_CONFIG)
  );
  expect(config.get()).toEqual(DEFAULT_SAFE_CONFIG);
});

test("update with SafeConfigSchema", () => {
  let eventCounter = 0;
  const dbId = DEFAULT_SAFE_CONFIG.id;
  const { mount, update, config } = createDb({}, SafeConfigSchema, {
    dbId,
  });

  document.addEventListener(DATABASE_UPDATE_EVENT, () => {
    eventCounter++;
  });

  mount();

  expect(config.get()).toEqual(DEFAULT_SAFE_CONFIG);
  expect(update({ params: "show" })).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "show",
  });
  expect(config.get()).toEqual({ ...DEFAULT_SAFE_CONFIG, params: "show" });
  expect(eventCounter).toEqual(1);

  expect(update({ params: "hide" })).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "hide",
  });
  expect(config.get()).toEqual({ ...DEFAULT_SAFE_CONFIG, params: "hide" });
  expect(eventCounter).toEqual(2);
});

test("createDb with derived schema", () => {
  {
    const CounterSchema = assign(
      SafeConfigSchema,
      object({ value: defaulted(number(), 0) })
    );

    const dbId = DEFAULT_SAFE_CONFIG.id;
    const { mount, mounted, config } = createDb({}, CounterSchema, {
      dbId,
    });

    mount();

    expect(mounted.get()).toEqual(true);
    expect(localStorage.getItem(dbId)).toEqual(
      JSON.stringify({ ...DEFAULT_SAFE_CONFIG, value: 0 })
    );
    expect(config.get()).toEqual({ ...DEFAULT_SAFE_CONFIG, value: 0 });
  }
});

test("update with derived schema", () => {
  const CounterSchema = assign(
    SafeConfigSchema,
    object({ value: defaulted(number(), 0) })
  );
  let eventCounter = 0;
  const dbId = DEFAULT_SAFE_CONFIG.id;
  const { mount, update, config } = createDb({}, CounterSchema, {
    dbId,
  });

  document.addEventListener(DATABASE_UPDATE_EVENT, () => {
    eventCounter++;
  });

  mount();
  expect(config.get()).toEqual({ ...DEFAULT_SAFE_CONFIG, value: 0 });

  expect(update({ params: "show" })).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "show",
    value: 0,
  });
  expect(config.get()).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "show",
    value: 0,
  });
  expect(eventCounter).toEqual(1);

  expect(update({ params: "hide", value: 1 })).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "hide",
    value: 1,
  });
  expect(config.get()).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "hide",
    value: 1,
  });
  expect(eventCounter).toEqual(2);
});

test("syncing 2 databases with SafeConfigSchema", () => {
  let eventCounter = 0;
  const dbId = DEFAULT_SAFE_CONFIG.id;
  const db1 = createDb({}, SafeConfigSchema, {
    dbId,
  });
  const db2 = createDb({}, SafeConfigSchema, {
    dbId,
  });

  document.addEventListener(DATABASE_UPDATE_EVENT, () => {
    eventCounter++;
  });

  db1.mount();
  db2.mount();

  expect(db1.update({ params: "show" })).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "show",
  });
  expect(db1.config.get()).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "show",
  });
  expect(db2.config.get()).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "show",
  });
  expect(localStorage.getItem(dbId)).toEqual(
    JSON.stringify({ ...DEFAULT_SAFE_CONFIG, params: "show" })
  );
  expect(eventCounter).toEqual(1);

  expect(db2.update({ params: "hide" })).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "hide",
  });
  expect(db1.config.get()).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "hide",
  });
  expect(db2.config.get()).toEqual({
    ...DEFAULT_SAFE_CONFIG,
    params: "hide",
  });
  expect(localStorage.getItem(dbId)).toEqual(
    JSON.stringify({ ...DEFAULT_SAFE_CONFIG, params: "hide" })
  );
  expect(eventCounter).toEqual(2);
});
