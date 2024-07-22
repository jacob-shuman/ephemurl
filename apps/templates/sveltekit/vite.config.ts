import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import packageJson from './package.json' assert { type: 'json' };

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		APP_DESCRIPTION: `"${packageJson.description}"`
	}
});
