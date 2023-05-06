<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { form: form_data, errors, enhance, constraints } = superForm(data.form_data);
</script>

<main>
	<article class="grid">
		<div>
			<hgroup>
				<h1>Register</h1>
				<h2>Choose a username and a password to join the community!</h2>
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
					placeholder="Desired username"
					aria-label="Desired username"
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
				<label for="confirm_password"
					>Confirm password
					{#if $errors.confirm_password}<small class="login-error-label">{$errors.confirm_password}</small>{/if}
					<!-- Following row shows as an error but works , don't know how to bypass  ¯\_(ツ)_/¯ -->
					{#if $errors['confirm']}<small class="login-error-label">{$errors['confirm']}</small>{/if}
				</label>
				<input
					name="confirm_password"
					type="password"
					placeholder="Confirm password"
					aria-label="Confirm password"
					bind:value={$form_data.confirm_password}
					{...$constraints.confirm_password}
					required
				/>
				<button type="submit">Register</button>
				{#if form?.apiError}<span class="login-error-message">{form?.message}</span>
				{/if}
			</form>
		</div>
	</article>
</main>
