<form {name} method="post" data-netlify="true" netlify-honeypot="bot-field" class={className}>
	<input name="form-name" value={name} type="hidden" />

	<slot></slot>
</form>

<style>
	form :global(:is(input, textarea)) {
		padding-inline: .5em;

		@apply bg-accent/10 rounded;
	}
</style>

<script>
	export let name, className
</script>
