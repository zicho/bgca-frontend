import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { PrivateMessageViewModel } from '../../../../core/api/generated';

export const load = (async ({ parent, params, url }) => {
	const { api, username } = await parent();

	if (username != params.username) {
		throw redirect(302, '/home');
	}

	let pageNumber = Number(url.searchParams.get('page') ?? '1');
	let limit = Number(url.searchParams.get('limit') ?? '10');

	if(limit > 50) {
		throw error(500, "Limit exceeds 50");
	}

	try {
		var messages = await api.client.privateMessage.getPrivateMessagesForUserAsync(
			username as string,
			limit,
			pageNumber
		);

		const msgCount = (await api.client.privateMessage.getPrivateMessageCountForUserAsync(params.username as string)).data as number;
		const totalPages = Math.ceil(msgCount / limit);

		return {
			messages: messages.data as PrivateMessageViewModel[],
			msgCount,
			pageNumber,
			limit,
			totalPages
		};
	} catch (e) {
		throw error(500);
	}
}) satisfies PageLoad;
