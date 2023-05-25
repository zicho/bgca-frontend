import { redirect } from '@sveltejs/kit';
import type { LayoutLoad, RequestEvent } from './$types';
import { ApiHelper } from '$lib/api/apiHelper';
import { handleLoginRedirect } from '$lib/util/handleLoginRedirect';

export const load = (async (event) => {
	if (event?.route?.id?.includes('(protected)') && !event.data.jwt) {
		throw redirect(302, handleLoginRedirect(event as unknown as RequestEvent));
	} else if (event.data.jwt) {
		const api = new ApiHelper(event.data.jwt as string);
		var msgCount = (
			await api.client.privateMessage.getPrivateMessageCountForUserAsync(
				event.data.username as string
			)
		).data;

		return {
			msgCount,
			...event.data,
			api
		};
	}
}) satisfies LayoutLoad;
