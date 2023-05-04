import { ApiHelper } from '../core/api/apiHelper';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {

    console.dir("server hit for layout")

	return {
        jwt: locals.jwt,
        username: locals.user?.username ?? null,
    };
}) satisfies LayoutServerLoad;
