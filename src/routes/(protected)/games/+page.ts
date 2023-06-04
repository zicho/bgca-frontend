import type { GameViewModel } from '$lib/api/generated';
import type { PageLoad } from './$types';

export const load = (async ({ parent, url }) => {
	const { api } = await parent();

	let query = url.searchParams.get('name');

	var data = await api?.client.game.getGames(query ? query : undefined);

	return {
		games: data?.data?.paginatedResults as GameViewModel[]
	};
}) satisfies PageLoad;
