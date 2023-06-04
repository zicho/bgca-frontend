<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let timer: NodeJS.Timeout | null = null;
	let searchQuery: string = '';

	export let queryParam: string = 'search';
	export let isLoading: boolean = false;

	function startTimer() {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			runSearch();
		}, 1000);
	}

	function resetTimer() {
		clearTimeout(timer as NodeJS.Timeout);
		startTimer();
	}

	function runSearch() {
		goto(searchQuery ? `${$page.url.pathname}?${queryParam}=${searchQuery}` : $page.url.pathname);
	}
</script>

<form>
	<input
		name="name"
		type="text"
		autofocus
		bind:value={searchQuery}
		on:input={resetTimer}
		placeholder="Search by name"
		aria-label="Search by name"
		class="input input-bordered input-md w-full"
	/>
</form>
