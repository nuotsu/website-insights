<Head title={site.title} />

<Hero/>
<BlogListing/>
<ReviewRequest/>

<script>
	import site from '$data/site.js'
	import Head from '$lib/Head.svelte'
	import Hero from './index/Hero.svelte'
	import BlogListing from './index/BlogListing.svelte'
	import ReviewRequest from '$lib/form/ReviewRequest.svelte'
</script>
