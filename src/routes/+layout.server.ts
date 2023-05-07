import { ApiHelper } from '../core/api/apiHelper';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	return {
        jwt: locals.jwt,
        username: locals.user?.username ?? null,
    };
}) satisfies LayoutServerLoad;