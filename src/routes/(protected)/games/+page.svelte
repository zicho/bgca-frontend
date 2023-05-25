<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ games } = data);

	let timer: NodeJS.Timeout | null = null;
	let searchQuery: string = '';

	function startTimer() {
		// Clear any existing timer
		if (timer) {
			clearTimeout(timer);
		}

		// Start a new timer
		timer = setTimeout(() => {
			// Call your function here
			runFunction();
		}, 1000);
	}

	function resetTimer() {
		// Clear the current timer and start a new one
		clearTimeout(timer as NodeJS.Timeout);
		startTimer();
	}

	function runFunction() {
		goto(searchQuery ? `${$page.url.pathname}?search=${searchQuery}` : $page.url.pathname);
	}
</script>

<form>
	<input
		autofocus
		bind:value={searchQuery}
		on:input={resetTimer}
		name="search"
		type="text"
		placeholder="Search"
		aria-label="Search"
	/>
</form>

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
