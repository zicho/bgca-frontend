<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from '$app/stores';

	let timer: NodeJS.Timeout | null = null;
	let searchQuery: string = '';

    export let queryParam: string = "search";

	function startTimer() {
		// Clear any existing timer
		if (timer) {
			clearTimeout(timer);
		}

		// Start a new timer
		timer = setTimeout(() => {
			// Call your function here
			runSearch();
		}, 1000);
	}

	function resetTimer() {
		// Clear the current timer and start a new one
		clearTimeout(timer as NodeJS.Timeout);
		startTimer();
	}

	function runSearch() {
		goto(searchQuery ? `${$page.url.pathname}?${queryParam}=${searchQuery}` : $page.url.pathname);
	}
</script>

<form>
	<input
		autofocus
		bind:value={searchQuery}
		on:input={resetTimer}
		name="name"
		type="text"
		placeholder="Search by name"
		aria-label="Search by name"
	/>
</form>
