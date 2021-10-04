import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		paths: {
			base: '/scoreboard'
		},
		appDir: 'app_',
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
		})
	}
};

export default config;
