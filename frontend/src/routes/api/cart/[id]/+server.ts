import { medusa } from '$lib/client';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ params: { id }, request }) => {
	const body = await request.json();
	try {
		await medusa.carts.update(id, body);
		return new Response('asdasd', {
			status: 201
		});
	} catch (error) {
		console.error(error);
		return new Response(error as unknown as BodyInit, {
			status: (error as unknown as Response).status,
			statusText: (error as unknown as Response).statusText
		});
	}
};

export const GET: RequestHandler = async ({ params: { id } }) => {
	try {
		const { cart } = await medusa.carts.retrieve(id);
		return json(cart, {
			status: 200
		});
	} catch (error) {
		console.error(error);
		return new Response(error as unknown as BodyInit, {
			status: (error as unknown as Response).status,
			statusText: (error as unknown as Response).statusText
		});
	}
};
