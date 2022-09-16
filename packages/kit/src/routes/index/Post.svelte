<h2>
	<a class="inline-block link h3" href="/blog/{ slug(title) }">
		{title}
	</a>
</h2>

<p class="text-sm mt-2 <md:pl-2">
	<span>
		📅
		<Date date={getDate({ properties })} />
	</span>
</p>

<script>
	import { getDate, getName } from '$utils/notion-utils'
	import slug from '$utils/slug'
	import Date from '$lib/Date.svelte'

	export let properties

	const title = getName({ properties }, 'Name')
</script>
