/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export interface IosDeviceOrientationEvent extends DeviceOrientationEvent {
  requestPermission?: () => Promise<PermissionState>;
}
