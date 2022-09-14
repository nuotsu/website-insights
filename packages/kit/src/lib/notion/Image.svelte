<figure class="text-center">
	<div class="<md:full-width"><img src={file.url} alt="" loading="lazy" /></div>

	{#if caption}
		<figcaption class="mt-2 text-sm">
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
