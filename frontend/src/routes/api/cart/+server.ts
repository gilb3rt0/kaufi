import { medusa } from '$lib/client';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_REGION_ID } from '$env/static/public';

export const GET: RequestHandler = async () => {
	try {
		const { cart } = await medusa.carts.create({
			region_id: PUBLIC_REGION_ID
		});
		console.log(cart);
		return json({
			id: cart.id
		});
	} catch (error) {
		console.error(error);
		return new Response(error as unknown as BodyInit, {
			status: (error as unknown as Response).status,
			statusText: (error as unknown as Response).statusText
		});
	}
};
