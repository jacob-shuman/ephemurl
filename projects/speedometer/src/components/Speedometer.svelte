<script lang="ts">
  import { onMount } from "svelte";
  import { toast } from "svelte-sonner";

  let event: DeviceMotionEvent;
  let isMounted = false;
  let error: any;
  let msg = "";
  let request = false;

  onMount(() => {
    msg =
      "requestPermission defined: " +
      // @ts-expect-error
      JSON.stringify(DeviceMotionEvent.requestPermission);

    // @ts-expect-error
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      toast("Device motion permissions are required", {
        dismissable: false,
        action: {
          label: "Open",
          onClick: async () => {
            msg = "clicked";
            // @ts-expect-error
            const res = await DeviceMotionEvent.requestPermission();

            msg = res;
          },
        },
      });
    }

    isMounted = true;

    // @ts-ignore
    // request = typeof DeviceMotionEvent.requestPermission === "function";

    try {
      event = new DeviceMotionEvent("devicemotion");
    } catch (err) {
      error = err;
    }
  });
</script>

{#if event}
  <h1>{event.accelerationIncludingGravity}</h1>
{:else}
  <h1>{msg}</h1>
{/if}

<h1>{isMounted}</h1>

<h1>{error}</h1>

<h1>{request}</h1>
