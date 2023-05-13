<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData, ActionData } from './$types';
	import { page } from '$app/stores';
	import { ApiError } from '../../../core/api/generated';

	export let data: PageData;
	export let form: ActionData;

	let message: string;
	$: message = $page.url.searchParams.get('message') ?? '';

	const { form: form_data, errors, enhance, constraints } = superForm(data.form_data);
</script>

<main>
	<article>
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<h2>Enter your credentials below</h2>
			</hgroup>
			<form use:enhance method="post">
				<label for="username"
					>Username{#if $errors.username}
						<small class="login-error-label">{$errors.username}</small>
					{/if}</label
				>
				<input
					name="username"
					type="text"
					placeholder="Username"
					aria-label="Username"
					bind:value={$form_data.username}
					{...$constraints.username}
					required
				/>
				<label for="password"
					>Password {#if $errors.password}<small class="login-error-label">{$errors.password}</small
						>{/if}</label
				>
				<input
					name="password"
					type="password"
					placeholder="Password"
					aria-label="Password"
					bind:value={$form_data.password}
					{...$constraints.password}
					required
				/>

				<button type="submit">Login</button>
			</form>
		</div>
	</article>

	{#if form?.apiError || message}
		<article class="form-error-container">
			<div>
				{#if message}
					<span class="form-error-message">{message}</span>
				{:else if form?.apiError}
					<span class="form-error-message">{form?.message}</span>
				{/if}
			</div>
		</article>
	{/if}
</main>
