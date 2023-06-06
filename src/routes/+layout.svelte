<script lang="ts">
	// import '@picocss/pico';
	import '../app.scss';
	import { page } from '$app/stores';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	$: path = parsePath($page.url.pathname);

	function parsePath(path: string): {
		label: string;
		href: string;
	}[] {
		const tokens = path.split('/').filter((t) => t !== '');
		let tokenPath = '';
		let crumbs = tokens.map((t) => {
			tokenPath += '/' + t;

			const firstLetter = t.charAt(0);
			const firstLetterCap = firstLetter.toUpperCase();
			const remainingLetters = t.slice(1);
			const capitalizedWord = firstLetterCap + remainingLetters;

			return {
				label: capitalizedWord,
				href: tokenPath
			};
		});

		return crumbs;
	}
</script>

<div class="flex flex-col h-screen ">
	<div class="sticky top-0 z-50">
		<div class="navbar bg-neutral text-neutral-content">
			<div class="flex-1">
				<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div>
				<ul class="menu menu-horizontal">
					{#if data.jwt}
						<li><a href="/home"><i class="fa fa-home button-icon-standard" />Home</a></li>
						<li>
							<a href="/games"><i class="fa fa-dice button-icon-standard" />Games</a>
						</li>
						<li>
							<a href="/profile/{data?.username}"
								><i class="fa fa-user button-icon-standard" />Profile</a
							>
						</li>
						<li>
							<a href="/inbox/{data?.username}"
								><i class="fa fa-envelope button-icon-standard" />Inbox {#if data.msgCount != 0}<small
										>({data.msgCount})</small
									>{/if}</a
							>
						</li>
						<li><a href="/logout"><i class="fa fa-sign-out button-icon-standard" />Logout</a></li>
					{:else}
						<li><a href="/login"><i class="fa fa-sign-in button-icon-standard" />Login</a></li>
						<li>
							<a href="/register"> <i class="fa fa-user-plus button-icon-standard" />Register</a>
						</li>
					{/if}
				</ul>
			</div>
		</div>
	</div>

	<div class="bg-base-200 grow container p-4 md:px-16 md:py-8 prose max-w-none">
		<slot />
	</div>

	<div class="sticky bottom-0 z-50">
		<footer class="content-center bg-neutral text-neutral-content px-4 py-2">
			<ul class="menu menu-horizontal">
				<li><a class="px-2" href="/rules">Rules</a></li>
				<li><a class="px-4" href="/about">About</a></li>
				<li><a class="px-4" href="/contact">Contact</a></li>
			</ul>
		</footer>
	</div>
</div>