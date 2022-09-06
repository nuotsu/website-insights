<Head title={site.title} />

<section>
	<h1>👨‍💻 {site.title}</h1>
</section>

<section>
	<form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="form-name" value="netlify-form-example" />
		<label for="name">Name</label>
		<input name="name" id="name" required placeholder="Name" type="text" />
		<label for="email">Email</label>
		<input name="email" id="email" required placeholder="Email" type="email" />
		<label for="message">Message</label>
		<input name="message" id="message" required placeholder="Message" type="text" />
		<input type="submit" value="Submit" />
	</form>
</section>

<!-- <section>
	<Form name="review-request">
		<h2>Get your site reviewed!</h2>

		<Input name="name" label="Name" autocomplete="name" required />
		<Input name="email" label="Email" type="email" placeholder="Email" required />
		<Input name="url" label="Website URL" placeholder="https://example.com" required />
		<Textarea name="message" label="Message" placeholder="Any comments or additional info you would like to mention?" />

		<button>Submit for review</button>
	</Form>
</section> -->

<script>
	import site from '$data/site.js'
	import Head from '$lib/Head.svelte'
	import { Form, Input, Textarea } from '$lib/form'
</script>
