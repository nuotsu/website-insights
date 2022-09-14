<a class="link" href="/blog/{ slug(title) }">
	<h2>{title}</h2>
</a>

<script>
	import { getProperty } from '$utils/notion-utils'
	import slug from '$utils/slug'

	export let properties

	const title = getProperty({ properties }, 'Name')
</script>
