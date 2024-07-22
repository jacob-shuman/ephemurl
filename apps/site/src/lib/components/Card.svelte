<script lang="ts">
	import { IconBrandGithub, IconLink } from '@tabler/icons-svelte';
	import tw from 'clsx';
	import type { Project } from '../constants';

	export let project: Project;

	const { name, status, icon, url, repo } = project;
</script>

<div
	class={tw('flex w-full flex-col gap-y-2 sm:max-w-[16rem]', status !== 'ready' && 'opacity-40')}
>
	<a
		href={status === 'ready' ? url ?? (repo && repo.url) ?? undefined : undefined}
		class={tw(
			'group focus:outline-none',
			status === 'ready' ? 'cursor-pointer' : 'cursor-not-allowed'
		)}
	>
		<div
			class={tw(
				'bg-bg-400 dark:bg-bg-dark-400 text-bg-100 dark:text-bg-dark-100 flex h-32 w-full items-center justify-center rounded sm:w-64',
				status === 'ready' &&
					'scale group-hover:bg-fg-500 group-hover:dark:bg-fg-dark-500 group-focus:bg-fg-500 group-focus:dark:bg-fg-dark-500 group-focus:border-bg-100 group-focus:dark:border-bg-dark-100 border-2 border-transparent transition-all duration-100 ease-out group-hover:-translate-y-2 group-focus:-translate-y-2'
			)}
		>
			<svelte:component
				this={icon}
				class={tw(
					'size-12',
					status === 'ready' &&
						'group-hover:text-fg-100 group-hover:dark:text-fg-dark-100 group-focus:text-fg-100 group-focus:dark:text-fg-dark-100'
				)}
			/>
		</div>
	</a>

	<div class="flex flex-col gap-y-1 break-words">
		<div
			class={tw(
				'flex items-center justify-between gap-x-2',
				status !== 'ready' && 'text-bg-100 dark:text-bg-dark-100'
			)}
		>
			<p class="font-bold uppercase">
				{name}
			</p>

			{#if status !== 'ready'}
				<p class="text-xs font-bold">{status.toUpperCase()}</p>
			{/if}
		</div>

		<div class="flex flex-col break-words">
			{#if url}
				<a
					href={status === 'ready' ? url : undefined}
					class={tw(
						'text-bg-300 dark:text-bg-dark-300 group flex items-center gap-x-2 focus:outline-none',
						status === 'ready'
							? 'hover:text-bg-100 hover:dark:text-bg-dark-100 focus:text-bg-100 focus:dark:text-bg-dark-100 transition-colors duration-100'
							: 'cursor-not-allowed'
					)}
				>
					<IconLink class="size-4 min-h-[1rem] min-w-[1rem]" />
					<p class="line-clamp-1">{url}</p>
				</a>
			{/if}

			{#if repo}
				<a
					href={status === 'ready' ? repo.url : undefined}
					class={tw(
						'text-bg-300 dark:text-bg-dark-300 group flex items-center gap-x-2 focus:outline-none',
						status === 'ready'
							? 'hover:text-bg-100 hover:dark:text-bg-dark-100 focus:text-bg-100 focus:dark:text-bg-dark-100 transition-colors duration-100'
							: 'cursor-not-allowed'
					)}
				>
					<IconBrandGithub class="size-4 min-w-min" />
					<p class="line-clamp-1">{repo.label}</p>
				</a>
			{/if}
		</div>
	</div>
</div>
