<script lang="ts">
	import { page } from '$app/stores';
	import type { PrivateMessageViewModel } from '$lib/api/generated';
	import type { PageData } from './$types';

	export let data: PageData;

	// let form: ActionData;

	let username = $page.params.username;
	let messages: PrivateMessageViewModel[];

	$: messages = data.messages;
    $: pageNumber = data.pageNumber;

	let { totalPages, msgCount, limit } = data;
</script>

<div>
	<header>
		<div class="grid">
			<hgroup>
				<h1>Inbox</h1>
				<h2>Read and respond to messages</h2>
			</hgroup>
		</div>
	</header>
	<figure>
		<table>
			<tr>
				<th>Sender</th>
				<th>Content</th>
				<th>Sent at</th>
				<th>Read</th>
			</tr>
			{#each messages as m}
				<tr>
					<th>{m.sender}</th>
					<th>{m.content}</th>
					<th>{m.sendTime}</th>
					<th>{m.hasBeenRead}</th>
				</tr>
			{/each}
		</table>
	</figure>
	<footer>
		<div class="grid">
			<div class="pagination">
				{#each Array(totalPages) as _, i}
					<a data-sveltekit-noscroll href="{$page.params.username}?page={i + 1}"><kbd>{i + 1}</kbd></a>
				{/each}
				<p>Page {pageNumber} / {totalPages}</p>
			</div>
		</div>
	</footer>
</div>

<style>
	footer {
		margin-bottom: 150px;
	}

	.pagination {
		display: inline-block;
	}

	.pagination a,
	p {
		color: black;
		float: left;
		padding: 8px 16px;
		text-decoration: none;
	}

	.pagination p {
		float: right;
	}
</style>
