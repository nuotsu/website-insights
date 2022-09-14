<svelte:element this={tag} {id}>
	<RichText {rich_text} />
</svelte:element>

<script>
	import slug from '$utils/slug'
	import RichText from './RichText.svelte'

	export let block

	const { d } = block.type.match(/^heading_(?<d>\d+)$/).groups

	const tag = `h${ d }`

	const { rich_text }	= block[block.type]
	const id = slug(rich_text[0].plain_text)
</script>
