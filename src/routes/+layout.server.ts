import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, cookies, route }) => {
	return {
		jwt: locals.jwt,
		username: locals.user?.username ?? null
	};
}) satisfies LayoutServerLoad;
