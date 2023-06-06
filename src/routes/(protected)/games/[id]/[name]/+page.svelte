<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	let { game } = data;
</script>

<div class="flex items-center justify-center w-full">
	<div class="bg-white w-full rounded overflow-hidden shadow-lg flex flex-col md:flex-row h-full">
		<div class="block md:w-1/3">
			<img src={game.imageUrl} alt="Product" class="w-full m-0" />
		</div>
		<div class="md:w-2/3 flex flex-col justify-between">
			<div class="px-6 py-4">
				<div class="flex justify-between items-center">
					<div class="font-bold text-xl">
						<h2 class="m-0">{game.name}</h2>
					</div>
					<span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						BGG Rating: {game.bggRating}
					</span>
				</div>
				<p class="text-gray-700 text-base">
					{game.description}
				</p>
			</div>
			
			<div class="px-6 mb-8">
				<h3 class="mb-2">External links</h3>
				<a href="https://boardgamegeek.com/boardgame/{game.bggId}" class="hover:underline"
					>{game.name} on BGG</a
				>
			</div>
		</div>
	</div>
</div>
