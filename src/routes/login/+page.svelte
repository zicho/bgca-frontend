<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { form: form_data, errors, enhance, constraints } = superForm(data.form_data);
</script>

<main>
	<article class="grid">
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<h2>Enter your credentials below</h2>
			</hgroup>
			<form
				use:enhance
				method="post"
			>
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
					required
					bind:value={$form_data.username}
					{...$constraints.username}
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
					required
					bind:value={$form_data.password}
					{...$constraints.password}
				/>

				<button type="submit">Login</button>
				{#if form?.apiError}<span class="login-error-message">{form?.response.message}</span>
				{/if}
			</form>
		</div>
	</article>
</main>
