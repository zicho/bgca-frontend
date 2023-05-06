import { error } from '@sveltejs/kit';
import type { ApiError } from '../../../core/api/generated';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const { api, username } = await parent();

	try {
		var data = await api.client.user.getApiUserProfile(params.username as string);

		return {
			profile: data,
			isYourProfile: data?.data?.username === username
		};
	} catch (e) {
		var apiError = e as ApiError;

        console.dir(e)

		if (apiError.status == 404) {
			return {
				error: `User ${params.username} does not seem to exist :(`
			};
		} else {
            console.log("error")
			throw error(500);
		}
	}
}) satisfies PageLoad;
