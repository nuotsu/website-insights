<header class="px-4 text-center">
	<h1 class="h1">{getName(data.page, 'Name')}</h1>
</header>

<section class="grid gap-y-4 gap-x-8 p-4">
	<aside class="self-start md:ml-auto md:sticky top-4">
		<a class="bg-paper dark:bg-ink" href>
			{data.page.icon.emoji}
		</a>
	</aside>

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
	}

</style>

<script>
	import { getName } from '$utils/notion-utils'
	import Blocks from '$lib/notion/Blocks.svelte'
	import TableOfContents from './TableOfContents.svelte'

	export let data

	const blocks = data.blocks.results
</script>
