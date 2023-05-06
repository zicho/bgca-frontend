import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const { api, username } = await parent();

	if (username != params.username) {
		throw redirect(302, '/profile');
	}

	try {
		var response = await api.client.user.getApiUserProfile(params.username as string);

		return {
			profile: response,
			isYourProfile: response.data?.username === username
		};
	} catch (e) {
		throw error(500);
	}
}) satisfies PageLoad;
