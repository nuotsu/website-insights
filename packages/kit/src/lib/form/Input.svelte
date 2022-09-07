<label for={name}>
	{label}{#if required}*{/if}
</label>

<input id={name} {name} {type} placeholder={label} {required} {...$$props} />

<script>
	export let label, name, type = 'text', required = null
</script>
