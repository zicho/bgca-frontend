import type { ApiError } from '../../core/api/generated';
import { ErrorMessages } from '../../core/constants/messages/ErrorMessages';
import { loginSchema } from '../../core/validationSchemas/loginSchema';
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

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

				return {
					message: message ? message : ErrorMessages.SERVICE_UNAVAILABLE,
					form_data,
					apiError: true
				};
			}

			throw redirect(301, '/home');
		} else {
			return {
				form_data
			};
		}
	}
};
