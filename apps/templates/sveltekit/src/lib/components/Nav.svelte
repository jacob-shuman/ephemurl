<script lang="ts">
	import { APP_CAPITALIZED_IDSchema } from '$lib';
	import { createDb, type BaseConfig } from 'ephemurl-db';
	import { Utils, type PaletteItemProps } from 'ephemurl-utils';
	import { onMount } from 'svelte';

	export let params: Record<string, string | object>;
	export let ssrConfig: BaseConfig;

	const paletteItems: PaletteItemProps[] = [];

	const db = createDb(APP_CAPITALIZED_IDSchema, { params, dbId: ssrConfig.id });
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
