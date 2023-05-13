import type { PageLoad } from './$types';

export const prerender = false;

export const load = (async ({parent}) => {
    
    const { api } = await parent();
    var data = await api.client.user.getAsync()

    return {
        users: data.data
    };
}) satisfies PageLoad;