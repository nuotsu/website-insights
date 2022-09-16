<section class="section">
	<ul class="grid gap-8">
		{#each results as post}
			<li>
				<Post {...post} />
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>

<script>
	import Post from './Post.svelte'
	import { page } from '$app/stores'

	const { results } = $page.data.db
</script>
