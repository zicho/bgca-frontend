<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main>
	<article class="grid">
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<h2>Enter your credentials below</h2>
			</hgroup>
			<form
				use:enhance={() => {
					return async ({ update }) => {
						await update({ reset: false });
					};
				}}
				method="post"
			>
				<label for="username">Username</label>
				<input
					name="username"
					type="text"
					placeholder="Username"
					aria-label="Username"
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

				<button type="submit">Login</button>

				{#if !form?.response.success && form?.response.message}<span class="login-error"
						>{form?.response.message}</span
					>
				{/if}
			</form>
		</div>
	</article>
</main>
