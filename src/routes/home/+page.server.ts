import type { UserViewModel } from '../../core/api/generated';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	var response = await locals.api.client.user.getAsync();
	return { users: response.data as UserViewModel[] };
};
