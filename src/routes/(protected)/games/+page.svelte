<script lang="ts">
	import TimeoutSearchForm from '$lib/components/TimeoutSearchForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ games } = data);

	let isLoading: boolean;

	$: isLoading: games.length == 0;
</script>

<div class="searchbar mb-8">
	<TimeoutSearchForm queryParam="name" bind:isLoading />
</div>

{#if isLoading}
	<div class="mb-8 flex items-center justify-center">
		<i class="fa-solid fa-spinner fa-spin text-8xl" />
	</div>
{:else}
	<div class="flex flex-wrap -mx-4">
		{#each games as game}
			<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
				<a href="/games/{game.id}/{game.name?.toLocaleLowerCase()}">
					<div class="bg-white rounded-lg shadow-lg flex flex-col h-full">
						<img
							class="my-0 aspect-square w-full max-h-72"
							src={game.thumbnailUrl}
							alt="{game.name} cover art"
						/>
						<div class="flex-grow p-4 relative">
							<h3 class="text-lg font-semibold text-gray-800 mb-2 my-0 overflow-hidden">
								{game.name}
							</h3>
							<p class="truncate-lines-2 text-gray-600">{game.description}</p>
							<!-- <button class="left-0 btn w-full absolute bottom-0">Buy Now</button> -->
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
	<div class="flex join space-x-2 justify-center md:justify-start" >
		<button class="flex-grow sm:flex-grow-0 join-item btn btn-md">1</button>
		<button class="flex-grow sm:flex-grow-0 join-item btn btn-md btn-active">2</button>
		<button class="flex-grow sm:flex-grow-0 join-item btn btn-md">3</button>
		<button class="flex-grow sm:flex-grow-0 join-item btn btn-md">4</button>
	  </div>
	  
{/if}

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
