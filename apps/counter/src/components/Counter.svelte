<script lang="ts">
  import tw from "clsx";

  let count = 0;

  export let classes: string | undefined;
  export { classes as class };
</script>

<input
  type="number"
  class={tw(
    "w-full font-bold text-center text-9xl font-rubik-mono focus:outline-none bg-transparent",
    classes
  )}
  bind:value={count}
  on:keydown={(event) => {
    if (event.key === "ArrowUp") {
      count += event.shiftKey ? 9 : 0;
    } else if (event.key === "ArrowDown") {
      count -= event.shiftKey ? 9 : 0;
    }
  }}
/>

<style>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
