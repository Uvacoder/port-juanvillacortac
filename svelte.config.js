import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		windi({
			silent: true,
			configPath: './windi.config.js',
		}),
	],
	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#main',
	}
};

export default config;
