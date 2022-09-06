<Head title={site.title} />

<section>
	<h1>👨‍💻 {site.title}</h1>
</section>

<section>
	<Form name="review-request">
		<h2>Get your site reviewed!</h2>

		<Input name="name" label="Name" autocomplete="name" required />
		<Input name="url" label="Website URL" placeholder="https://example.com" required />
		<Textarea name="message" label="Message" placeholder="Any comments or additional info you would like to mention?" />

		<button>Submit for review</button>
	</Form>
</section>

<script>
	import site from '$data/site.js'
	import Head from '$lib/Head.svelte'
	import { Form, Input, Textarea } from '$lib/form'
</script>
