<script lang="ts">
  import { prefersDark, theme } from "../stores";
</script>

<html
  lang="en"
  class:system={true}
  class:dark={$theme === "dark" || ($theme === "system" && $prefersDark)}
  class:light={$theme === "light" || ($theme === "system" && !$prefersDark)}
>
  <slot />
</html>

<style>
  /* @media (prefers-color-scheme: light) {
    .system {
      @apply bg-white text-black;
    }
  }
  */

  /* @media (prefers-color-scheme: dark) {
    @apply bg-black;
  } */

  /* .system { */
  /* @media (prefers-color-scheme: dark) {
    @apply bg-black text-white;
  } */
  /* } */

  .dark {
    @apply bg-black text-white;
  }

  .light {
    @apply bg-white text-black;
  }
</style>
