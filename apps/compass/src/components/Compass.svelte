<script lang="ts">
  import {
    CompassSchema,
    isIos,
    permissionState,
    requestPermission,
  } from "@constants";
  import { createDb } from "ephemurl-db";
  import { Button } from "ephemurl-utils";
  import { onMount } from "svelte";

  export let dbId: string;
  let heading: any = 0;
  // TODO: fix AbsoluteOrientationSensor types
  // let sensor: any;
  // let sensorStarted = false;

  const db = createDb(CompassSchema, { dbId });
  $: ({ mounted, mount } = db);

  onMount(() => {
    mount();
  });

  $: if ($mounted && $permissionState === "granted") {
    if ($isIos) {
      ondeviceorientation = (event) => {
        heading = (event as any).webkitCompassHeading;
      };
    } else {
      // if ("AbsoluteOrientationSensor" in window && !sensorStarted) {
      //   sensor = new AbsoluteOrientationSensor();

      //   sensor.onreading = () => {
      //     console.log("hio");
      //   };

      //   sensor.addEventListener("reading", () => {
      //     console.log("new reading");
      //   });

      //   sensor.addEventListener("error", (event) => {
      //     console.log(event.error);
      //   });

      //   console.log("added event listener");

      //   sensor.start();

      //   console.log("started");
      //   console.log(sensor);

      //   sensorStarted = true;
      // } else {
      ondeviceorientationabsolute = (event) => {
        heading = event.alpha ?? 0;
      };
      // }
    }
  }
</script>

<main class="flex flex-col items-center">
  {#if $permissionState === "prompt"}
    <p>
      You will need to allow permission to access the device's motion sensors
    </p>
    <Button
      onclick={async () => permissionState.set(await requestPermission())}
      class="w-full max-w-lg font-bold"
    >
      Show Prompt
    </Button>
  {:else if $permissionState === "denied"}
    <p>
      Permission to access this device's motion senors has been denied. Please
      enable permission to continue.
    </p>
  {:else if $permissionState === "granted"}
    <div class="rounded-full size-72 border-2 border-bg-500"></div>

    <p class="font-bold text-6xl grid grid-cols-2 gap-x-4">
      <span class="text-end">{Math.round(heading)}°</span>

      <span class="col-span-1">
        {#if heading < 22.5 || heading > 337.5}
          N
        {:else if heading >= 22.5 && heading < 67.5}
          NE
        {:else if heading >= 67.5 && heading < 112.5}
          E
        {:else if heading >= 112.5 && heading < 157.5}
          SE
        {:else if heading >= 157.5 && heading < 202.5}
          S
        {:else if heading >= 202.5 && heading < 247.5}
          SW
        {:else if heading >= 247.5 && heading < 292.5}
          W
        {:else if heading >= 292.5 && heading < 337.5}
          NW
        {/if}
      </span>
    </p>
  {/if}
</main>
