import { ApiHelper } from '../core/api/apiHelper';
import type { LayoutLoad } from './$types';

export const load = (async (event) => {

    const api = new ApiHelper(event.data.jwt)

    return {
        ...event.data,
        api
    };
}) satisfies LayoutLoad;