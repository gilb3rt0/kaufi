import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data }) => {
	if (browser) {
		const cartId = localStorage?.getItem('cartId');
		if (!cartId) {
			const res = await fetch('/api/cart', {
				method: 'GET'
			});
			const { id } = await res.json();
			if (id) {
				localStorage.setItem('cartId', id);
			}
		} else {
			const cart = await fetch(`/api/cart/${cartId}`, {
				method: 'GET'
			});
			console.log(cart);
		}
	}
	return {
		products: data.products
	};
};
