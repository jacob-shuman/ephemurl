import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../shared/utils/dist/components/*'],
	presets: [require('../../tailwind.preset.cjs')]
} as Config;
