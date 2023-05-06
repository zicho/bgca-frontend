import { ApiHelper } from '../../core/api/apiHelper';
import type { PageLoad } from './$types';

export const load = (async (event) => {
    const { api } = await event.parent();
    var data = await api.client.game.getApiGame()

    return {
        games: data.data
    };
}) satisfies PageLoad;

