{#each blocks as block}
	{#if /^heading_\d+$/.test(block.type)}
		<Heading {block} />

	{:else if block.type == 'paragraph'}
		<p><RichText rich_text={block.paragraph.rich_text} /></p>

	{:else if block.type == 'image'}
		<Image {...block.image} />

	{:else if block.type == 'divider'}
		<hr class="border-0 border-b border-ink/10 !my-8">

	{:else}
		<details class="debug">
			<summary>block: {block.type}</summary>
			<pre>{JSON.stringify(block, null, 2)}</pre>
		</details>
	{/if}
{/each}

<script>
	import Heading from './Heading.svelte'
	import RichText from './RichText.svelte'
	import Image from './Image.svelte'

	export let blocks
</script>
