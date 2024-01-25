<script lang="ts">
  import tw from "clsx";
  import type { Project } from "../constants";

  export let name: string;
  export let status: Project["status"];
  export let url: string | undefined = undefined;
  export let repo: string | undefined = undefined;
</script>

<div
  class={tw(
    "flex flex-col gap-y-2 w-full sm:max-w-[16rem]",
    status === "planned" && "opacity-40"
  )}
>
  <a
    href={status === "ready"
      ? url ?? (repo && `https://github.com/${repo}`) ?? undefined
      : undefined}
    class={tw(
      "group focus:outline-none",
      status === "ready" ? "cursor-pointer" : "cursor-not-allowed"
    )}
  >
    <div
      class={tw(
        "text-grey bg-tinge dark:bg-bauhaus w-full sm:w-64 h-32 rounded-lg flex justify-center items-center",
        status === "ready" &&
          "group-hover:-translate-y-2 group-focus:-translate-y-2 scale transition-all duration-100 ease-out group-hover:bg-bauhaus group-hover:dark:bg-tinge group-focus:bg-bauhaus group-focus:dark:bg-tinge"
      )}
    >
      <slot name="icon" />
    </div>
  </a>

  <div class="flex flex-col gap-y-1 break-words">
    <div class="flex items-center gap-x-2">
      <p class={tw("uppercase font-bold", status === "planned" && "text-grey")}>
        {name}
      </p>

      {#if status !== "ready"}
        <p class="text-xs font-bold">•</p>

        <p class="text-xs font-bold">
          {status.toUpperCase()}
        </p>
      {/if}
    </div>

    <div class="flex flex-col">
      {#if url}
        <a
          href={status === "ready" ? url : undefined}
          class={tw(
            "flex gap-x-2 items-center group text-grey focus:outline-none",
            status === "ready"
              ? "transition-colors duration-100 hover:text-bauhaus hover:dark:text-tinge focus:text-bauhaus focus:dark:text-tinge"
              : "cursor-not-allowed"
          )}
        >
          <slot name="url-icon" />
          <p class="line-clamp-1">{url}</p>
        </a>
      {/if}

      {#if repo}
        <a
          href={status === "ready" ? `https://github.com/${repo}` : undefined}
          class={tw(
            "flex gap-x-2 items-center group text-grey focus:outline-none",
            status === "ready"
              ? "transition-colors duration-100 hover:text-bauhaus hover:dark:text-tinge focus:text-bauhaus focus:dark:text-tinge"
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
