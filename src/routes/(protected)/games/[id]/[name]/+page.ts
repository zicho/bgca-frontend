import type { GameViewModel } from '../../../../../core/api/generated';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const { api } = await parent();
	var game = (await api?.client.game.getGameById(Number(params.id)))?.data as GameViewModel;
	return {
        game
    };
}) satisfies PageLoad;
