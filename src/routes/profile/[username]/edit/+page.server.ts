import { redirect } from '@sveltejs/kit';
import type { ApiError } from '../../../../core/api/generated';


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
