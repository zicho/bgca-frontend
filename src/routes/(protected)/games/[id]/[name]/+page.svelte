<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import type { GameViewModel } from '../../../../../core/api/generated';
	export let data: PageData;

	let { game } = data;
</script>

<div class="row">
	<div class="col col-lg-3 col-md-3 col-sm-3 col-xs-3">
		<img src={game.thumbnailUrl} alt="{game.name} cover art" />
	</div>
	<div class="m-0 item-content col col-lg-9 col-md-9 col-sm-9 col-xs-9">
		<h1>{game.name}</h1>
        <p>{game.minNumberOfPlayers} to {game.maxNumberOfPlayers} players</p>
        <p>BGG Rating: {game.bggRating}</p>
        <p><a href="https://boardgamegeek.com/boardgame/{game.bggId}">{game.name} at BoardGameGeek</a></p>
	</div>
</div>
<div class="row game-data">
	<p>{game?.description}</p>
</div>

<style>
	.game-data {
		margin-top: 20px;
	}
    
	img {
		width: 100%;
		aspect-ratio: 1/1;
	}
</style>
