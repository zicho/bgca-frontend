<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData, ActionData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
	export let form: ActionData;

	let message: string;
	$: message = $page.url.searchParams.get('message') ?? '';

	const { form: form_data, errors, enhance, constraints } = superForm(data.form_data);
</script>

<div class="flex flex-col items-center justify-center">
	<div class="w-full md:w-1/2 xl:w-1/3">
		<div class="shadow p-8">
			<h2 class="font-semibold mt-0">Login</h2>
			<form use:enhance method="post">
				<div class="form-control mb-4">
					<label for="username" class="label">
						<span class="label-text">Username</span>
						{#if $errors.username}<span class="label-text-alt text-red-700">{$errors.username}</span
							>{/if}
					</label>
					<input
						required
						name="username"
						type="text"
						placeholder="Username"
						aria-label="Username"
						class="input input-bordered"
						bind:value={$form_data.username}
						{...$constraints.username}
					/>
				</div>

				<div class="form-control mb-4">
					<label for="password" class="label">
						<span class="label-text">Username</span>
						{#if $errors.password}<span class="label-text-alt text-red-700">{$errors.password}</span
							>{/if}
					</label>
					<input
						required
						name="password"
						type="password"
						placeholder="Password"
						aria-label="Password"
						class="input input-bordered"
						bind:value={$form_data.password}
						{...$constraints.password}
					/>
				</div>

				<button type="submit" class="w-full py-2 px-4 btn">Sign In</button>
			</form>
		</div>
		{#if form?.apiError || message}
			<div class="shadow p-8 alert-error mt-4 text-center">
				{#if message}
					<span class="form-error-message">{message}</span>
				{:else if form?.apiError}
					<span class="form-error-message">{form?.message}</span>
				{/if}
			</div>
		{/if}
	</div>
</div>