import { SafeConfigSchema } from "ephemurl-db";
import {
  assign,
  defaulted,
  nullable,
  number,
  object,
  type Infer,
} from "superstruct";
import { writable } from "svelte/store";
import type { IosDeviceOrientationEvent } from "./env";

export const CompassSchema = assign(
  SafeConfigSchema,
  object({
    compass: defaulted(
      object({ heading: defaulted(nullable(number()), null) }),
      {}
    ),
  })
);

export type CompassData = Infer<typeof CompassSchema>;

export type CompassPermissionState =
  | "unknown"
  | "unsupported"
  | PermissionState;

export const permissionState = writable<CompassPermissionState>("unknown");
export const isIos = writable<boolean>(false);

export const requestPermission = async (): Promise<CompassPermissionState> => {
  if (
    !("DeviceOrientationEvent" in window) &&
    !("AbsoluteOrientationSensor" in window)
  ) {
    return "unsupported";
  }

  // if ("AbsoluteOrientationSensor" in window) {
  //   let state: CompassPermissionState = "denied";

  //   await Promise.all([
  //     navigator.permissions.query({
  //       name: "accelerometer",
  //     } as unknown as PermissionDescriptor),
  //     navigator.permissions.query({
  //       name: "magnetometer",
  //     } as unknown as PermissionDescriptor),
  //     navigator.permissions.query({
  //       name: "gyroscope",
  //     } as unknown as PermissionDescriptor),
  //   ]).then((results) => {
  //     if (results.every((result) => result.state === "granted")) {
  //       state = "granted";
  //     }
  //   });

  //   return state;
  // }

  if (
    typeof (
      window.DeviceOrientationEvent as unknown as IosDeviceOrientationEvent
    ).requestPermission !== "function"
  ) {
    isIos.set(false);
    return "granted";
  }

  isIos.set(true);
  return (
    (await (
      window.DeviceOrientationEvent as unknown as IosDeviceOrientationEvent
    )
      .requestPermission?.()
      .then((state) => state)
      .catch((error) =>
        error.name === "NotAllowedError" ? "prompt" : "denied"
      )) ?? "granted"
  );
};
