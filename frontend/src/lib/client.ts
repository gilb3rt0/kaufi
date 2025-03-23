import { MEDUSA_BACKEND_URL, MEDUSA_BACKEND_API_KEY } from '$env/static/private';
import Medusa from '@medusajs/medusa-js';

export const medusa = new Medusa({
	baseUrl: MEDUSA_BACKEND_URL,
	publishableApiKey: MEDUSA_BACKEND_API_KEY,
	maxRetries: 3
});
