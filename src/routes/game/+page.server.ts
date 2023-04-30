import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    console.log("load")

	var data = await locals.api.client.game.getApiGame1(1);

    console.dir(data)

	return { data: data.data };
};
