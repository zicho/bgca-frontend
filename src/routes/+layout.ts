import { redirect } from '@sveltejs/kit';
import { ApiHelper } from '../core/api/apiHelper';
import type { LayoutLoad, RequestEvent } from './$types';
import { handleLoginRedirect } from '../core/util/handleLoginRedirect';

export const load = (async (event) => {
	if (event?.route?.id?.includes('(protected)') && !event.data.jwt) {
		throw redirect(302, handleLoginRedirect(event as unknown as RequestEvent));
	}

	const api = new ApiHelper(event.data.jwt as string);

	return {
		...event.data,
		api
	};
}) satisfies LayoutLoad;
