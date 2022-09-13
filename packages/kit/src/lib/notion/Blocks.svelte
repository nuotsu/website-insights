{#each blocks as block}
	{#if block.type == 'heading_2'}
		<h2><RichText rich_text={block.heading_2.rich_text} /></h2>

	{:else if block.type == 'paragraph'}
		<p><RichText rich_text={block.paragraph.rich_text} /></p>

	{:else if block.type == 'divider'}
		<hr>

	{:else}
		<details class="debug">
			<summary>block: {block.type}</summary>
			<pre>{JSON.stringify(block, null, 2)}</pre>
		</details>
	{/if}
{/each}

<script>
	import RichText from './RichText.svelte'

	export let blocks
</script>
