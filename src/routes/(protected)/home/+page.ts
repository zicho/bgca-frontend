import type { PageLoad } from './$types';

export const load = (async ({parent}) => {
    
    console.dir("Home!")

    const { api } = await parent();
    var data = await api.client.user.getAsync()



    return {
        users: data.data
    };
}) satisfies PageLoad;