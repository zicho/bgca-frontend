import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	if (locals.user?.username != params.username) {
		throw redirect(302, '/profile');
	}
	return {};
}) satisfies PageServerLoad;
