<header class="sticky top-0 p-4 <md:glass">
	<a class="lowercase" href="/">🚡 {site.title}</a>
</header>

<slot></slot>

<footer class="text-sm text-center p-4">
	<p>&copy; {new Date().getFullYear()} Website Insights. All rights reserved.</p>
</footer>

<script>
	import site from '$data/site.js'
	import '../styles/app.css'
</script>
