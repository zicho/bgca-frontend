import type { GameViewModel } from '../../../core/api/generated';
import type { PageLoad } from './$types';

export const load = (async ({ parent, url }) => {
	const { api } = await parent();

	let query = url.searchParams.get('search');

	var data = await api?.client.game.getGames(query ? query : undefined);

	return {
		games: data?.data as GameViewModel[]
	};
}) satisfies PageLoad;
