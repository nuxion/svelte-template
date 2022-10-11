const sveltePreprocess = require("svelte-preprocess");
// import sveltePreprocess from 'svelte-preprocess';
module.exports = {
	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
	],
};
