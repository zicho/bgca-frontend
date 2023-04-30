<script lang="ts">
	import '@picocss/pico';
	import '../app.scss';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<nav class="container-fluid">
	<ul>
		<li><a href="/"><strong>BGCA</strong></a></li>
	</ul>
	<ul>
		{#if data.jwt}
			<li><a href="/home">Home</a></li>
			<li><a href="/profile/{data?.username}">Profile</a></li>
			<li><a href="/logout">Logout</a></li>
		{:else}
			<li><a href="/login">Login</a></li>
			<li><a href="/register">Register</a></li>
		{/if}
	</ul>
</nav>

<main class="container">
	<slot />
</main>
