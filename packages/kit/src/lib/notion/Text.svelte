{#if href}
	<a class="link" {href} target={href.startsWith('http') ? '_blank' : null}>
		<TextContent {content} {annotations} />
	</a>

{:else}
	<TextContent {content} {annotations} />
{/if}

<script>
	import TextContent from './TextContent.svelte'

	export let text, annotations, href

	const { content } = text
</script>
