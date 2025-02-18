import adapter from '@sveltejs/adapter-vercel';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
			alias: {
				$css: resolve('src/app.css'),
				$utils: resolve('src/utils'),
				$lib: resolve('src/lib'),
				$components: resolve('src/lib/components'),
				$stores: resolve('src/stores'),
				$images: resolve('src/lib/images'),
				$icons: resolve('src/lib/icons'),
			},
	}
};

export default config;
