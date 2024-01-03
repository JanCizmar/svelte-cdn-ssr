import { availableLanguages } from './availableLanguages';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {

	const promises = availableLanguages.map((lang) => getLangData(lang));
	const data = await Promise.all(promises);

	const locales: Record<string, any> = {};

	data.forEach((langData) => {
		locales[langData.lang] = langData.data;
	});

	return {
		locales
	};
}

async function getLangData(lang: string) {
	const response = await fetch(`https://cdn.tolg.ee/2ca2dce2a4bbcd25602cbac894676d86/${lang}.json`);
	const data = await response.json();

	return { lang: lang, data: data };
}
