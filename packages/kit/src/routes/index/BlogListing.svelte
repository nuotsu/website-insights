<section>
	{#each results as post}
		<Post {...post} />
	{/each}
</section>

<script>
	import Post from './Post.svelte'
	import { page } from '$app/stores'

	const { results } = $page.data.db
</script>
