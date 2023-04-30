import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ApiError } from '../../../core/api/generated';

export const load = (async ({ locals, params }) => {
	try {
		var response = await locals.api.client.user.getApiUser1(params.username as string);

		return {
			profile: response,
			isYourProfile: response.data?.username == locals.user.username
		};
	} catch (e) {
		var apiError = e as ApiError;

		if (apiError.status == 404) {
			return {
				error: `User ${params.username} does not seem to exist :(`
			};
		} else {
			throw error(500);
		}
	}
}) satisfies PageServerLoad;
