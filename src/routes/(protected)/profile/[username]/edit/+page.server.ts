import type { ApiError } from '$lib/api/generated';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
	default: async ({ request, locals }) => {
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

		throw redirect(301, `/profile/${locals.user.username}?success=true`);
	}
};
