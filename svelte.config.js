import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const distDir = process.env.SVELTE_TESTAPP_DIST_DIR;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // default options are shown
      pages: distDir || 'build',
      assets: distDir || 'build',
      fallback: 'index.html',
      precompress: false,
    }),
  },
};

export default config;
