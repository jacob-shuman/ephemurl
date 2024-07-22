<script lang="ts">
	import { Nav } from '$lib';
	import '@fontsource-variable/rubik';
	import { BaseConfigSchema, createConfig } from 'ephemurl-db';
	import '../app.css';

	export let data;
	$: ({ params } = data);

	const ssrConfig = createConfig(params, BaseConfigSchema);
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	<!-- svelte-ignore missing-declaration -->
	<meta name="description" content={APP_DESCRIPTION} />
	<title>ephemurl</title>
</svelte:head>

<Nav {ssrConfig} {params} />

<slot />
