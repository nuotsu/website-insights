{#if url.includes('twitter.com')}
	{#await getTwitterEmbed()}
		<p class="text-center">Loading...</p>
	{:then { html }}
		{@html html}
	{:catch error}
		<aside class="debug">Twitter Embed: {error}</aside>
	{/await}
{/if}

<script>
	export let url

	async function getTwitterEmbed() {
		return await fetch(`https://publish.twitter.com/oembed?url=${url}`)
			.then(res => res.json())
	}
</script>
