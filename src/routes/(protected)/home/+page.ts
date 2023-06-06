import type { PageLoad } from './$types';

export const load = (async ({parent}) => {
    const { api } = await parent();

    try {
        var data = await api?.client.user.getAsync()
    } catch (error) {
        console.dir(error)
    }
    

    return {
        users: data?.data
    };
}) satisfies PageLoad;