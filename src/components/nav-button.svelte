<script lang="ts">
  import { IconMoonFilled, IconSunFilled } from "@tabler/icons-svelte";
</script>

<button
  class="w-12 h-12 flex justify-center items-center rounded-lg text-grey bg-tinge dark:bg-bauhaus"
>
  <IconSunFilled class="w-6 h-6 dark:hidden" />
  <IconMoonFilled class="w-6 h-6 hidden dark:block" />
</button>
