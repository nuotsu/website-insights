<figure class="text-center">
	<img src={file.url} alt="" loading="lazy" />

	{#if caption}
		<figcaption class="mt-2 text-sm opacity-60">
			{#each caption as c}
				<Text {...c} />
			{/each}
		</figcaption>
	{/if}
</figure>

<script>
	import Text from './Text.svelte'

	export let file, caption
</script>
