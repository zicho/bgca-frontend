import { redirect } from '@sveltejs/kit';
import { ApiHelper } from '../core/api/apiHelper';
import type { LayoutLoad } from './$types';

export const load = (async (event) => {
    if(event?.route?.id?.includes('(protected)') && !event.data.jwt) {
        throw redirect(303, "/login")
    }

    const api = new ApiHelper(event.data.jwt as string)

    return {
        ...event.data,
        api
    };
}) satisfies LayoutLoad;