<header class="px-4 text-center">
	<h1 class="h1">{getProperty(data.page, 'Name')}</h1>
</header>

<section class="grid gap-y-4 gap-x-8 p-4">
	<TableOfContents {blocks} />

	<article class="max-w-xl richtext">
		<Blocks {blocks} />
	</article>
</section>

<style>
	@screen lg {
		section {
			grid-template-columns: 1fr auto 1fr;
		}

		article {
			grid-column-start: 2;
		}
	}

</style>

<script>
	import { getProperty } from '$utils/notion-utils'
	import Blocks from '$lib/notion/Blocks.svelte'
	import TableOfContents from './TableOfContents.svelte'

	export let data

	const blocks = data.blocks.results
</script>
