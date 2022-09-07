<label for={name}>
	{label}{#if required}*{/if}
</label>

<textarea id={name} {name} placeholder={label} {required} {...$$props} />

<script>
	export let label, name, required = null
</script>
