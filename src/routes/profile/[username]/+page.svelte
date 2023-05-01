<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { profile, isYourProfile } = data;
</script>

{#if profile}
	<div class="grid">
		{#if isYourProfile}
			<div>
				<h1>Your profile</h1>
			</div>
			<div>
				<a href="{profile.data?.username}/edit" role="button" style="width: 100%">Edit profile</a>
			</div>
		{:else}
			<div>
				<h1>Profile of {profile.data?.username}</h1>
			</div>
			<div>
				<button type="submit">Send message</button>
			</div>
		{/if}
	</div>

	{#if profile.data?.description}
		<p>{profile.data?.description}</p>
	{:else if isYourProfile}
		<p><i>You have not yet written a presentation. Get to it!</i></p>
	{:else}
		<p><i>User {profile.data?.username} has not yet written a presentation.</i></p>
	{/if}
{:else}
	<h1>{data.error}</h1>
{/if}
