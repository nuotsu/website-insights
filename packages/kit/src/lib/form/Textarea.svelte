<p>
	<label for={name}>{label}</label>
	<textarea id={name} {name} placeholder={label} {required} {...$$props} />
</p>

<script>
	export let label, name, required = null
</script>
