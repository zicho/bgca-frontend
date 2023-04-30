import type { ApiError } from '../../core/api/generated';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
	default: async ({ cookies, request, locals }) => {
		const form = await request.formData();
		const username = form.get('username') as string;
		const password = form.get('password') as string;

		try {
			var response = await locals.api.client.user.postApiUserLogin({
				username: username,
				password: password
			});

			if (response.success) {
				cookies.set('jwt', response.data as string);
			} else
				return {
					response,
					username,
					password
				};
		} catch (error) {
			return {
				response: (error as ApiError).body,
				username,
				password
			};
		}  

		throw redirect(301, '/home');
	}
};
