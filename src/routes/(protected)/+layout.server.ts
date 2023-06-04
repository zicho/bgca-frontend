import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { handleLoginRedirect } from '$lib/util/handleLoginRedirect';

export const load = (async ({ locals, cookies }) => {
	const jwt = cookies.get('jwt');

	if (!jwt) {
		throw redirect(302, handleLoginRedirect(event as unknown as RequestEvent));
	}

	return {
		jwt: locals.jwt,
		username: locals.user?.username ?? null
	};

}) satisfies LayoutServerLoad;
