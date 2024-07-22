<script lang="ts">
	import { Card, games, modules, tools } from '$lib';
	import tw from 'clsx';
</script>

<section class="flex flex-col gap-y-3">
	<h3
		class={tw(
			'text-lg font-bold',
			tools.filter(({ status }) => status === 'ready').length < 1 && 'opacity-40'
		)}
	>
		TOOLS
	</h3>

	<div class="flex flex-wrap gap-8">
		{#each tools
			.sort((t1, t2) => t1.name.localeCompare(t2.name))
			.sort((t1, t2) => {
				const statusOrder = { ready: 0, planned: 1, unplanned: 2 };
				return statusOrder[t1.status] - statusOrder[t2.status];
			}) as project}
			<Card {project} />
		{/each}
	</div>
</section>

<section class="flex flex-col gap-y-3">
	<h3
		class={tw(
			'text-lg font-bold',
			games.filter(({ status }) => status === 'ready').length < 1 && 'opacity-40'
		)}
	>
		GAMES
	</h3>

	<div class="flex flex-wrap gap-8">
		{#each games
			.sort((g1, g2) => g1.name.localeCompare(g2.name))
			.sort((g1, g2) => Number(g2.status === 'ready') - Number(g1.status === 'ready')) as project}
			<Card {project} />
		{/each}
	</div>
</section>

<section class="flex flex-col gap-y-3">
	<h3
		class={tw(
			'text-lg font-bold',
			modules.filter(({ status }) => status === 'ready').length < 1 && 'opacity-40'
		)}
	>
		MODULES
	</h3>

	<div class="flex flex-wrap gap-8">
		{#each modules
			.sort((m1, m2) => m1.name.localeCompare(m2.name))
			.sort((m1, m2) => Number(m2.status === 'ready') - Number(m1.status === 'ready')) as project}
			<Card {project} />
		{/each}
	</div>
</section>
