<Head title={site.title} />

<section>
	<h1>👨‍💻 {site.title}</h1>
</section>

<ReviewRequest/>

<script>
	import site from '$data/site.js'
	import Head from '$lib/Head.svelte'
	import ReviewRequest from '$lib/form/ReviewRequest.svelte'
</script>
