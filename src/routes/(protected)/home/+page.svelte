<script lang="ts">
	import type { UserViewModel } from '$lib/api/generated';
	import type { PageData } from './$types';

	export let data: PageData;

	let users = data.users as UserViewModel[];

	const { username } = data;
</script>

	<h1>Welcome {username}!</h1>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ullamcorper ex. Praesent
	maximus nulla diam, at consectetur nibh fermentum at. Integer dui tellus, suscipit et
	pellentesque a, tempus a sapien. Integer eget consectetur nulla, vitae dignissim nulla. Sed
	rhoncus posuere dolor sed molestie.
</p>


<h2>Find your friends!</h2>
<div>
	
	{#each users as user, i}
		<ul>
			<li>
				<a href="profile/{user.username}" rel="noreferrer">
					{i + 1}: {user.username}
				</a>
			</li>
		</ul>
	{/each}

</div>
