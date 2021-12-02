import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import auto from '@sveltejs/adapter-auto';
import { optimizeImports } from "carbon-preprocess-svelte";
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		windi({
			mode: process.env.NODE_ENV,
			silent: true,
			configPath: './windi.config.js',
		}),
		optimizeImports(),
	],
	kit: {
		adapter: auto(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#main',
		vite: {
			optimizeDeps: {
				exclude: ['sswr']
			},
			resolve: {
				alias: {
					'@': path.resolve('./'),
				}
			}
		}
	}
};

export default config;
