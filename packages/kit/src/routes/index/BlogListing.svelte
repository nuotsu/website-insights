<section>
	<ul>
		{#each results as post}
			<li>
				<Post {...post} />
			</li>
		{/each}
	</ul>
</section>

<script>
	import Post from './Post.svelte'
	import { page } from '$app/stores'

	const { results } = $page.data.db
</script>
