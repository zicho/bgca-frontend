<script lang="ts">
	import TimeoutSearchForm from '$lib/components/TimeoutSearchForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ games, page, numPages, totalCount, limit } = data);

	let isLoading: boolean;

	$: isLoading: games.length == 0;
</script>

<div class="searchbar mb-8">
	<TimeoutSearchForm queryParam="name" bind:isLoading />
</div>

Page {page} of {numPages}

<div class="flex join space-x-2 flex-grow justify-center mb-8">
	<a href="/games?page={page - 1}">
		<button disabled={page == 1} role="link" class="flex-grow sm:flex-grow-0 join-item btn btn-md"
			>Previous</button
		></a
	>
	<!-- <button class="flex-grow sm:flex-grow-0 join-item btn btn-md btn-active">2</button>
	<button class="flex-grow sm:flex-grow-0 join-item btn btn-md">3</button> -->
	<a href="/games?page={page + 1}">
		<button disabled={page == numPages} class="flex-grow sm:flex-grow-0 join-item btn btn-md"
			>Next</button
		>
	</a>
</div>

<div class="flex flex-wrap -mx-4">
	{#each games as game}
		<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
			<a href="/games/{game.id}/{game.name?.toLocaleLowerCase()}">
				<div class="bg-white rounded-lg shadow-lg flex flex-col h-full">
					<img
						class="my-0 aspect-square w-full max-h-72"
						src={game.imageUrl}
						alt="{game.name} cover art"
					/>
					<div class="flex-grow p-4 relative">
						<h3 class="text-lg font-semibold text-gray-800 mb-2 my-0 overflow-hidden">
							{game.name}
						</h3>
						<p class="truncate-lines-2 text-gray-600">
							{game.description ? game.description : 'No description available'}
						</p>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<!-- 
{#each games as game}
	<a href="/games/{game.id}/{game.name?.toLocaleLowerCase()}">
		<div class="row">
			<div class="col p-0 col-lg-2 col-md-2 col-sm-3 col-xs-3">
				<img src={game.thumbnailUrl} alt="{game.name} cover art" />
			</div>
			<div class="item-content m-0 col col-lg-10 col-md-10 col-sm-9 col-xs-9">
				<h3>{game.name}</h3>
				{#if game.description}
					<p><small>{game.description}</small></p>
				{:else}
					<p><small>No description</small></p>
				{/if}
			</div>
		</div>
	</a>
	<hr />
{/each} -->

<style lang="scss">
	a {
		text-decoration: none;
	}

	.truncate-lines-2 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 4; /* Show 2 lines of text */
	}
</style>
