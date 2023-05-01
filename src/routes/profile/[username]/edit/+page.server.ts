import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ApiError } from '../../../../core/api/generated';

export const load = (async ({ locals, params }) => {
	if (locals.user?.username != params.username) {
		throw redirect(302, '/profile');
	}

	try {
		var response = await locals.api.client.user.getApiUserProfile(params.username as string);

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

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
	default: async ({ cookies, request, locals }) => {
		const form = await request.formData();
		const description = form.get('description') as string;

		try {
			var response = await locals.api.client.user.putApiUserProfile(
				locals.user.username as string,
				{
					description: description
				}
			);

			if (!response.success) {
				return {
					response
				};}
		} catch (error) {
			return {
				response: (error as ApiError).body,
				description
			};
		}

		throw redirect(301, '/profile/');
	}
};
