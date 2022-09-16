<header class="text-center dots moving">
	<h1 class="section h1">{title}</h1>
	<p class="flex flex-wrap gap-4 px-4 pb-2 text-sm">
		<span>📅 <Date date={getDate($page.data.page)} /></span>
	</p>
</header>

<style>
	p::before,
	p::after {
		content: '';
		margin: auto;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'
	import { getDate } from '$utils/notion-utils'

	export let title
</script>
