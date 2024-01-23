<script lang="ts">
  import tw from "clsx";

  export let name: string;
  export let inDevelopment: boolean;
  export let url: string | undefined = undefined;
  export let repo: string | undefined = undefined;
</script>

<div
  class={tw(
    "flex flex-col gap-y-2 w-full sm:max-w-[16rem]",
    !inDevelopment && "opacity-40"
  )}
>
  <a
    href={inDevelopment
      ? url ?? (repo && `https://github.com/${repo}`) ?? undefined
      : undefined}
    class={tw(
      "group focus:outline-none",
      inDevelopment ? "cursor-pointer" : "cursor-not-allowed"
    )}
    on:mouseenter={() => {
      if (inDevelopment) {
        const audio = new Audio("audio/focus.ogg");
        audio.volume = 0.25;
        audio.play();
      }
    }}
    on:focus={() => {
      if (inDevelopment) {
        const audio = new Audio("audio/focus.ogg");
        audio.volume = 0.25;
        audio.play();
      }
    }}
  >
    <div
      class={tw(
        "text-grey bg-tinge dark:bg-bauhaus w-full sm:w-64 h-32 rounded-lg flex justify-center items-center",
        inDevelopment &&
          "group-hover:-translate-y-2 group-focus:-translate-y-2 scale transition-all duration-100 ease-out group-hover:bg-bauhaus group-hover:dark:bg-tinge group-focus:bg-bauhaus group-focus:dark:bg-tinge"
      )}
    >
      <slot name="icon" />
    </div>
  </a>

  <div class="flex flex-col gap-y-1 break-words">
    <p class={tw("uppercase font-bold", !inDevelopment && "text-grey")}>
      {name}
    </p>

    <div class="flex flex-col">
      {#if url}
        <a
          href={inDevelopment ? url : undefined}
          class={tw(
            "flex gap-x-2 items-center group text-grey",
            inDevelopment
              ? "transition-colors duration-100 hover:text-bauhaus hover:dark:text-tinge"
              : "cursor-not-allowed"
          )}
        >
          <slot name="url-icon" />
          <p class="line-clamp-1">{url}</p>
        </a>
      {/if}

      {#if repo}
        <a
          href={inDevelopment ? `https://github.com/${repo}` : undefined}
          class={tw(
            "flex gap-x-2 items-center group text-grey",
            inDevelopment
              ? "transition-colors duration-100 hover:text-bauhaus hover:dark:text-tinge"
              : "cursor-not-allowed"
          )}
        >
          <slot name="vcs-icon" />
          <p class="line-clamp-1">{repo}</p>
        </a>
      {/if}
    </div>
  </div>
</div>
