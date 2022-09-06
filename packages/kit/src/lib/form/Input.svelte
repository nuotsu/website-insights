<p>
	<label for={name}>{label}</label>
	<input id={name} {name} {type} placeholder={label} {required} {...$$props} />
</p>

<script>
	export let label, name, type = 'text', required = null
</script>
