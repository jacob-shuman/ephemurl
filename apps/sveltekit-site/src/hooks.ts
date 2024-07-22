import type { Handle } from '@sveltejs/kit';
import tw from 'clsx';
import { BaseConfigSchema, buildTheme, createConfig } from 'ephemurl-db';

export const handle: Handle = async ({ event, resolve }) => {
	const config = createConfig(
		Object.fromEntries(event.url.searchParams.entries()),
		BaseConfigSchema
	);
	const style = Object.entries(buildTheme(config))
		.map(([key, value]) => `${key}: ${value};`)
		.join('; ');

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace(
				'%document%',
				`<html lang="en" class="${tw(
					config.theme.mode === 'system-dark' || (config.theme.mode === 'dark' && 'dark'),
					'transition-all duration-100 ease-out',
					'overflow-y-scroll scrollbar scrollbar-track-transparent'
				)}" style="${style}">`
			)
	});
};
