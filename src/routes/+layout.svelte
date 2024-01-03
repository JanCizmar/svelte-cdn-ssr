<script lang="ts">
	import { TolgeeProvider, Tolgee, DevTools, BackendFetch } from '@tolgee/svelte';
	import { FormatIcu } from '@tolgee/format-icu';
	import { availableLanguages } from './availableLanguages';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatIcu())
		.init({
			// apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			// apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
			language: 'en',
			availableLanguages,
			staticData: data.locales
		});
</script>

<TolgeeProvider tolgee={tolgee}>
	<div slot="fallback">Loading...</div>
	<slot />
</TolgeeProvider>
