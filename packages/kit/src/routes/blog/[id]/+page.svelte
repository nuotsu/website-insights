<header class="px-4 text-center">
	<h1 class="h1">{properties.Name.title[0].plain_text}</h1>
</header>

<section class="max-w-xl mx-auto p-4 richtext">
	<Blocks blocks={data.blocks.results} />
</section>

<script>
	import Blocks from '$lib/notion/Blocks.svelte'

	export let data

	const { properties } = data.page
</script>
