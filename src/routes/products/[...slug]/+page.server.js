import { getContent } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '../../../apiKey';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	let slug = /[^/]*$/.exec(event.url.pathname)[0];
	console.log(slug);
	
	// fetch your Builder content
	const content = await getContent({
		model: 'products',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: {
			query: {
				[`data.slug`]: slug
			}
		}
	});

	return { content };
}
