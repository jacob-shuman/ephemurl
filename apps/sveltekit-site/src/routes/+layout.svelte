<script>
	import '../app.css';
	// import packageJson from '../../package.json';
	import { Nav } from '$lib';
	import '@fontsource-variable/rubik';
	import { BaseConfigSchema, createConfig } from 'ephemurl-db';

	export let data;
	$: ({ params } = data);

	const ssrConfig = createConfig(params, BaseConfigSchema);
</script>

<!-- {style}
	lang="en"
	class={tw(
		(ssrConfig.theme.mode === 'dark' || ssrConfig.theme.mode === 'system-dark') && 'dark',
		'transition-all duration-100 ease-out',
		'scrollbar scrollbar-track-transparent overflow-y-scroll'
	)} -->

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	<!-- TODO: fix this -->
	<!-- <meta name="description" content={packageJson.description} /> -->
	<title>ephemurl</title>
</svelte:head>

<Nav {ssrConfig} {params} />

<slot></slot>
