<BG/>

<header class="md:sticky top-0 p-4">
	<a class="font-serif" href="/">🚡 {site.title}</a>
</header>

<slot></slot>

<footer class="text-sm text-center p-4">
	<p>&copy; {new Date().getFullYear()} Website Insights. All rights reserved.</p>
</footer>

<script>
	import BG from '$lib/blobs/BG.svelte'
	import site from '$data/site.js'
	import '../styles/app.css'
</script>
