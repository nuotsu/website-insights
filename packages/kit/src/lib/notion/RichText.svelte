{#each rich_text as rt}
	{#if rt.type == 'text'}
		<Text {...rt} />

	{:else if rt.type == 'text'}
		<details>
			<summary>rich_text: {rt.type}</summary>
			<pre>{JSON.stringify(rt, null, 2)}</pre>
		</details>
	{/if}
{/each}

<script>
	import Text from './Text.svelte'

	export let rich_text
</script>
