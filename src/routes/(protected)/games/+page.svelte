<script lang="ts">
	import TimeoutSearchForm from '$lib/components/TimeoutSearchForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ games } = data);
</script>

<TimeoutSearchForm queryParam="name" />

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
{/each}

<style>
	a,
	p,
	small {
		color: inherit;
	}
	a:hover {
		text-decoration: none;
	}

	.item-content {
		padding-left: 20px;
	}

	img {
		width: 100%;
		aspect-ratio: 1/1;
	}

	.row {
		margin: 20px 0px;
	}

	.row:hover {
		background-color: ghostwhite;
	}
</style>
