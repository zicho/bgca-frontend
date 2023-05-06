import { redirect } from '@sveltejs/kit';
import type { ApiError } from '../../core/api/generated';
import type { PageServerLoad } from './$types';
import { ErrorMessages } from '../../core/constants/messages/ErrorMessages';
import { registerSchema } from '../../core/validationSchemas/registerSchema';
import { superValidate } from 'sveltekit-superforms/server';

export const load = (async (event) => {
	const form_data = await superValidate(event, registerSchema);
	return {
		form_data
	};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
	default: async (event) => {
		const form_data = await superValidate(event, registerSchema);
		if (form_data.valid) {
			try {
				var response = await event.locals.api.client.user.postApiUserRegister({
					username: form_data.data.username,
					password: form_data.data.password,
					confirmPassword: form_data.data.confirm_password
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
		} else return { form_data };
	}
};
