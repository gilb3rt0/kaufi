import { medusa } from '$lib/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: { id } }) => {
	try {
		const { product } = await medusa.products.retrieve(id);
		return {
			product
		};
	} catch (error) {
		console.error(error);
	}
};
