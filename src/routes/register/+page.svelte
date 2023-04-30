<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main>
	<article class="grid">
		<div>
			<hgroup>
				<h1>Register</h1>
				<h2>Choose a username and a password to join the community!</h2>
			</hgroup>
			<form
				use:enhance={() => {
					return async ({ update }) => {
						await update({ reset: false });
					};
				}}
				method="post"
			>
				<label for="username">Desired username</label>
				<input
					name="username"
					type="text"
					placeholder="Desired username"
					aria-label="Desired username"
					value={form?.username ?? ''}
					required
				/>
				<label for="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Password"
					aria-label="Password"
					value={form?.password ?? ''}
					required
				/>
				<label for="confirm_password">Confirm password</label>
				<input
					name="confirm_password"
					type="password"
					placeholder="Confirm password"
					aria-label="Confirm password"
					required
				/>

				<button type="submit">Register</button>

				{#if !form?.response.success && form?.response.message}<span class="login-error"
						>{form?.response.message}</span
					>
				{/if}
			</form>
		</div>
	</article>
</main>
