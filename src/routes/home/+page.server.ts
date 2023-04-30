import type { UserViewModel } from '../../core/api/generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    console.log("load")

	var response = await locals.api.client.user.getApiUser2();

    console.dir(response)

	return { users: response.data as UserViewModel[] };
};
