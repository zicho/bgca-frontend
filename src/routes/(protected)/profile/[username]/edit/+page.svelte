<script lang="ts">
	import { enhance } from '$app/forms';
	import type { UserProfileViewModel } from '../../../../../core/api/generated';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	let profile = data.profile?.data as UserProfileViewModel;
	let desc = profile.description;
	let form: ActionData;
</script>

<div>
	<hgroup>
		<h1>Editing profile</h1>
		<h2>Update your info and press submit to save changes</h2>
	</hgroup>
	<form
		use:enhance={() => {
			return async ({ update }) => {
				await update({ reset: false });
			};
		}}
		method="post"
	>
		<label for="username">Introduce yourself!</label>
		<textarea placeholder="Write a short presentation of yourself (visible to other users)" style="resize: none" name="description" bind:value={desc} />

		<button type="submit">Submit</button>

		{#if !form?.response.success && form?.response.message}<span class="login-error"
				>{form?.response.message}</span
			>
		{/if}
	</form>
</div>
