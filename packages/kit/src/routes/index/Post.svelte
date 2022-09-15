<a class="inline-block link" href="/blog/{ slug(title) }">
	<h2>{title}</h2>
</a>

<script>
	import { getName } from '$utils/notion-utils'
	import slug from '$utils/slug'

	export let properties

	const title = getName({ properties }, 'Name')
</script>
