import { medusa } from '$lib/client';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		const { products } = await medusa.products.list();
		return { products };
	} catch (error) {
		console.error(error);
	}
};
