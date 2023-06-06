import type { GameViewModel } from '$lib/api/generated';
import { isInteger } from '$lib/functions/validators';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent, url }) => {
	const { api } = await parent();

	let query = url.searchParams.get('name');
	let page = Number(url.searchParams.get('page'));
	let limit = Number(url.searchParams.get('limit'));

	var data = await api?.client.game.getGames(
		query ? query : undefined,
		page ? page : undefined,
		limit ? limit : undefined
	);

	// validate query strings
	if (page == 0 || !isInteger(page)) page = 1;
	if (limit == 0 || !isInteger(limit)) limit = 10;

	const totalCount = data?.data?.totalResultCount as number;
	const numPages = calculateNumPages(limit, totalCount);
	if(page > numPages) throw redirect(301, '/games')

	return {
		games: data?.data?.paginatedResults as GameViewModel[],
		totalCount,
		page,
		limit,
		numPages
	};
}) satisfies PageLoad;

function calculateNumPages(limitPerPage: number, totalCount: number): number {
	return Math.ceil(totalCount / limitPerPage);
}
