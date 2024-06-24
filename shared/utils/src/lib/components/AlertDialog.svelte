<script lang="ts">
  import { Button } from "$lib";
  import { AlertDialog } from "bits-ui";
  import tw from "clsx";
  import { fade, fly } from "svelte/transition";
  import { twMerge } from "tailwind-merge";

  export let open = false;
  export let title: string;
  export let description: string | undefined = undefined;
  export let danger = false;
  export let overlayClasses = tw`fixed inset-0 z-50 bg-black/80`;
  export let contentClasses = tw(
    "fixed left-[50%] top-[50%] z-50 max-w-[94%] translate-x-[-50%] translate-y-[-50%] gap-4 outline-none",
    "w-full sm:max-w-2xl md:w-full",
    "bg-bg-500 dark:bg-bg-200 rounded p-4"
  );
  export let cancelText = "No";
  export let confirmText = "Yes";
  export let onConfirm:
    | ((options: { setOpen: (open: boolean) => void }) => void)
    | undefined = undefined;
  export let classes: string | undefined = undefined;
  export { classes as class };
</script>

<AlertDialog.Root bind:open>
  <AlertDialog.Trigger asChild>
    <slot openDialog={() => (open = true)} />
  </AlertDialog.Trigger>

  <AlertDialog.Portal asChild>
    <AlertDialog.Overlay
      transition={fade}
      transitionConfig={{ duration: 150 }}
      class={overlayClasses}
    />

    <AlertDialog.Content
      class={twMerge(contentClasses, classes)}
      transition={fly}
    >
      <div class="flex flex-col pb-6 gap-y-4">
        <AlertDialog.Title class="text-lg font-bold">
          {title}
        </AlertDialog.Title>

        {#if description}
          <AlertDialog.Description>
            {description}
          </AlertDialog.Description>
        {/if}
      </div>

      <div class="flex flex-col items-center justify-end w-full gap-y-2">
        <AlertDialog.Cancel asChild>
          <Button onclick={() => (open = false)} class="w-full">
            {cancelText}
          </Button>
        </AlertDialog.Cancel>

        <AlertDialog.Action asChild>
          <Button
            class={tw("w-full", { "text-red-500": danger })}
            onclick={() => {
              onConfirm?.({
                setOpen: (o) => (open = o),
              });

              open = false;
            }}
          >
            <!-- TODO: move to translation -->
            {confirmText}
          </Button>
        </AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
