<script lang="ts">
	import { games, modules, tools } from '$lib';
	import {
		IconAppsFilled,
		IconBrandGithub,
		IconDeviceDesktop,
		IconMoonFilled,
		IconPrompt,
		IconSunFilled
	} from '@tabler/icons-svelte';
	import {
		BaseConfigSchema,
		createDb,
		cycleTheme,
		PALETTE_TOGGLE_EVENT,
		type BaseConfig
	} from 'ephemurl-db';
	import { Button, Utils, type PaletteItemProps } from 'ephemurl-utils';
	import { onMount } from 'svelte';
	import LinkButton from './LinkButton.svelte';

	export let params: Record<string, string | object>;
	export let ssrConfig: BaseConfig;

	let paletteItems: PaletteItemProps[] = [
		{
			type: 'menu',
			icon: IconAppsFilled,
			label: 'Open App',
			section: 'Site',
			children: [
				...[...tools, ...games, ...modules]
					.filter((t) => t.url && t.status === 'ready')
					.map(
						(t) =>
							({
								type: 'link',
								icon: t.icon,
								label: t.name.replaceAll('_', ' '),
								url: t.url
							}) as PaletteItemProps
					)
			]
		} as PaletteItemProps
	].filter((i) => i !== undefined);

	const db = createDb(BaseConfigSchema, { params, dbId: ssrConfig.id });
	$: ({ config, update, mount } = db);

	onMount(async () => {
		mount();

		if (
			($config ?? ssrConfig).theme.mode === 'system' &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			update({ theme: { mode: 'system-dark' } });
		} else if (
			($config ?? ssrConfig).theme.mode === 'system-dark' &&
			!window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			update({ theme: { mode: 'system' } });
		}
	});
</script>

<Utils {ssrConfig} {db} {paletteItems} />

<nav class="flex flex-col justify-between gap-y-2 sm:flex-row sm:gap-y-0">
	<div class="flex flex-col gap-y-2">
		<h1 class="text-4xl font-black">EPHEMURL</h1>
		<div class="bg-bg-400 dark:bg-bg-dark-400 h-0.5 rounded"></div>
	</div>

	<!-- TODO: fix color flashing issue when changing themes -->
	<div class="flex items-center gap-x-3">
		<Button
			tooltip="Theme"
			onclick={() =>
				update({
					theme: { mode: cycleTheme(($config ?? ssrConfig).theme.mode) }
				})}
		>
			{#if ($config ?? ssrConfig).theme.mode === 'dark'}
				<IconMoonFilled class="size-6" />
			{:else if ($config ?? ssrConfig).theme.mode === 'light'}
				<IconSunFilled class="size-6" />
			{:else}
				<IconDeviceDesktop class="size-6" />
			{/if}
		</Button>

		<div class="bg-bg-400 dark:bg-bg-dark-400 h-4 w-0.5 rounded" />

		<Button
			tooltip="Command Palette"
			onclick={() => {
				window.dispatchEvent(new CustomEvent(PALETTE_TOGGLE_EVENT));
			}}
		>
			<IconPrompt class="size-6" />
		</Button>

		<div class="bg-bg-400 dark:bg-bg-dark-400 h-4 w-0.5 rounded" />

		<LinkButton tooltip="GitHub Repo" href="https://github.com/jacob-shuman/ephemurl-site">
			<IconBrandGithub class="size-6" />
		</LinkButton>
	</div>
</nav>
