<header>
	<h1>{properties.Name.title[0].plain_text}</h1>
</header>

<section class="richtext">
	<Blocks blocks={data.blocks.results} />
</section>

<script>
	import Blocks from '$lib/notion/Blocks.svelte'

	export let data

	const { properties } = data.page
</script>
