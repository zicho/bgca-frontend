import { superValidate } from 'sveltekit-superforms/server';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ApiError } from '$lib/api/generated';
import { ErrorMessages } from '$lib/constants/messages/ErrorMessages';
import { loginSchema } from '$lib/validationSchemas/loginSchema';

export const load = (async (event) => {
	const form_data = await superValidate(event, loginSchema);
	return {
		form_data
	};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
	default: async (event) => {
		const form_data = await superValidate(event, loginSchema);

		if (form_data.valid) {
			try {
				var response = await event.locals.api.client.user.postApiUserLogin({
					username: form_data.data.username,
					password: form_data.data.password
				});

				if (response.success) {
					event.cookies.set('jwt', response.data as string);
				}
			} catch (error) {
				let message = (error as ApiError)?.body?.message;

				console.dir(message)

				return {
					message: message ? message : ErrorMessages.SERVICE_UNAVAILABLE,
					form_data,
					apiError: true
				};
			}

			const redirectTo = event.url.searchParams.get('redirectTo');

			if(redirectTo) {
				throw redirect(302, `/${redirectTo.slice(1)}`);
			} else {
				throw redirect(302, "/home");
			}
		} else {
			return {
				form_data
			};
		}
	}
};
