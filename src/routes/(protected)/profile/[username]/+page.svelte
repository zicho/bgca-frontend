<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	let success: boolean;
	$: success = ($page.url.searchParams.get('success') as unknown as boolean) ?? false;
</script>

{#if success}
	<article class="form-success-container">
		<div>
			<span class="form-success-message">Profile updated!</span>
			<a href={data.username}><i class="fa fa-close" /></a>
		</div>
	</article>
{/if}

{#if data.profile}
	<div class="grid">
		{#if data.isYourProfile}
			<div>
				<h1>Your profile</h1>
			</div>
			<div>
				<a href="{data.profile.data?.username}/edit" role="button" style="width: 100%"
					><i class="fa fa-pen button-icon-standard" />Edit profile</a
				>
			</div>
			<div>
				<a href="{data.profile.data?.username}/inbox" role="button" style="width: 100%"
					><i class="fa fa-envelope button-icon-standard" />Inbox</a
				>
			</div>
		{:else}
			<div>
				<h1>Profile of {data.profile.data?.username}</h1>
			</div>
			<div>
				<button type="submit">Send message</button>
			</div>
		{/if}
	</div>

	<div>
		<h3>Description</h3>
		{#if data.profile.data?.description}
			<p>{data.profile.data?.description}</p>
		{:else if data.isYourProfile}
			<p><i>You have not yet written a presentation. Get to it!</i></p>
		{:else}
			<p><i>User {data.profile.data?.username} has not yet written a presentation.</i></p>
		{/if}
	</div>
{:else}
	<h1>{data.error}</h1>
{/if}
