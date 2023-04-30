<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { username, users } = data;
</script>

<h1>Welcome {username}!</h1>
<p>You are logged in</p>

<h2>Find your friends!</h2>
<div>
	{#each users as user, i}
    <ul>
		<li>
			<a href="profile/{user.username}" rel="noreferrer">
				{i + 1}: {user.username}
			</a>
		</li>
    </ul>
	{/each}
</div>
