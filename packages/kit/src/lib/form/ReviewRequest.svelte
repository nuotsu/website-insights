<section>
	<h2>Get your site reviewed!</h2>

	<Form name="review-request" className="form">
		<Input name="name" label="Name" autocomplete="name" required />
		<Input name="email" label="Email" type="email" placeholder="Email" required />
		<Input name="url" label="Website URL" placeholder="https://example.com" required />
		<Textarea
			name="message"
			label="Message"
			placeholder="Any comments or additional info you would like to mention?"
			rows={3}
		/>

		<p class="col-span-full">
			<button>Submit for review</button>
		</p>
	</Form>
</section>

<style>
	section :global(.form) {
		display: grid;
		grid-template-columns: auto 1fr;
	}
</style>

<script>
	import Form from './Form.svelte'
	import Input from './Input.svelte'
	import Textarea from './Textarea.svelte'
</script>
