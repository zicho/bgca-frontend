<script lang="ts">
	import '@picocss/pico';
	import '@picocss/pico';
	import '../app.scss';
	import { page } from '$app/stores';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	$: path = parsePath($page.url.pathname);

	function parsePath(path: string): {
		label: string;
		href: string;
	}[] {
		const tokens = path.split('/').filter((t) => t !== '');
		let tokenPath = '';
		let crumbs = tokens.map((t) => {
			tokenPath += '/' + t;

			const firstLetter = t.charAt(0);
			const firstLetterCap = firstLetter.toUpperCase();
			const remainingLetters = t.slice(1);
			const capitalizedWord = firstLetterCap + remainingLetters;

			return {
				label: capitalizedWord,
				href: tokenPath
			};
		});

		return crumbs;
	}
</script>

<nav class="container-fluid main-nav">
	<ul>
		<li><a href="/"><strong>BGCA</strong></a></li>
	</ul>
	<ul>
		{#if data.jwt}
			<li><i class="fa fa-home button-icon-standard" /><a href="/home">Home</a></li>
			<li>
				<i class="fa fa-user button-icon-standard" /><a href="/profile/{data?.username}">Profile</a>
			</li>
			<li>
				<i class="fa fa-envelope button-icon-standard" /><a href="/inbox/{data?.username}">Inbox</a>
			</li>
			<li><i class="fa fa-sign-out button-icon-standard" /><a href="/logout">Logout</a></li>
		{:else}
			<li><i class="fa fa-sign-in button-icon-standard" /><a href="/login">Login</a></li>
			<li><i class="fa fa-user-plus button-icon-standard" /><a href="/register">Register</a></li>
		{/if}
	</ul>
</nav>

{#if data.jwt && path.length > 1}
	<nav class="container-fluid" aria-label="breadcrumb">
		<ul>
			{#each path as p}
				<li><a href={p.href}>{p.label}</a></li>
			{/each}
		</ul>
	</nav>
{/if}
<hr class="m-0" />

<main class="container">
	<slot />
</main>

<nav dir="rtl" class="container-fluid footer">
	<ul>
		<li><a href="/about">About</a></li>
		<li><a href="/guidelines">Guidelines</a></li>
		<li><a href="/rules">Rules</a></li>
	</ul>
</nav>
