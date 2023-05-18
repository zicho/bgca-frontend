import type { GameViewModel } from '../../../core/api/generated';
import type { PageLoad } from './$types';

export const load = (async ({parent}) => {
    
    const { api } = await parent();

    var data = await api?.client.game.getGames()

    return {
        games: data?.data as GameViewModel[]
    };
}) satisfies PageLoad;