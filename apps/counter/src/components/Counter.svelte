<script lang="ts">
  import tw from "clsx";

  let count = 0;

  const onBlur = (e: FocusEvent) => {
    count = Number((e.target as HTMLInputElement).value);
  };

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
  on:blur={onBlur}
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
