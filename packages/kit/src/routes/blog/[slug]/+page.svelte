<header class="text-center dots moving">
	<h1 class="section h1">{getName(data.page, 'Name')}</h1>
</header>

<section class="grid gap-y-4 gap-x-8 p-4">
	<aside class="self-start md:ml-auto md:sticky top-4">
		<a class="bg-paper dark:bg-ink" href title="Scroll to top">
			{data.page.icon?.emoji || ''}
		</a>
	</aside>

	<TableOfContents {blocks} />

	<article class="max-w-xl richtext mb-12">
		<Blocks {blocks} />
	</article>
</section>

<ReviewRequest/>

<style>
	@screen lg {
		section {
			grid-template-columns: 1fr auto 1fr;
		}
	}

	article > :global(*:first-child::first-letter) {
		background-clip: text;
		color: transparent;
		font-size: 5em;
		@apply bg-gradient-to-br from-accent to-accent/50 font-serif;
	}

	article :global(code) {
		@apply text-accent;
	}

	article:empty::before {
		content: 'Nothing found here...';
		opacity: 0.4;
	}
</style>

<script>
	import { getName } from '$utils/notion-utils'
	import Blocks from '$lib/notion/Blocks.svelte'
	import TableOfContents from './TableOfContents.svelte'
	import ReviewRequest from '$lib/form/ReviewRequest.svelte'

	export let data

	const blocks = data.blocks.results
</script>
