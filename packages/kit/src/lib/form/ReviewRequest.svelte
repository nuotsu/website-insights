<section class="section-sm">
	<h2 class="h2 text-center">Get your site reviewed!</h2>

	<Form name="review-request" className="form mt-4">
		<Input name="name" label="Name" autocomplete="name" required />
		<Input name="email" label="Email" type="email" placeholder="Email" required />
		<Input name="url" label="Website URL" placeholder="https://example.com" required />
		<Textarea
			name="message"
			label="Message"
			placeholder="Any comments or additional info you would like to mention?"
			rows={3}
		/>

		<div class="col-span-full text-center mt-4">
			<button class="action">Submit your website for review</button>
			<small class="block">Absolutely free of charge!</small>
		</div>
	</Form>
</section>

<style>
	section :global(.form) {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: .5em;
	}
</style>

<script>
	import Form from './Form.svelte'
	import Input from './Input.svelte'
	import Textarea from './Textarea.svelte'
</script>
