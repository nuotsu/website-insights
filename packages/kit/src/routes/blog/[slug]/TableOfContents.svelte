<details class="self-start text-sm" open>
	<summary>Table of Contents</summary>

	<nav>
		<ul>
			{#each headings as { type, text }}
				<li class={type}>
					<a class="link" href="#{ slug(text) }">
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</details>

<style>
	@screen lg {
		details {
			@apply sticky top-4 order-1;
		}
	}

	.heading_2 { margin-top: 0.5em; }
	.heading_3 { margin-left: 1em; }
</style>

<script>
	import slug from '$utils/slug'

	export let blocks

	const headings = blocks
		.filter(({ type }) => /^heading_\d+/.test(type))
		.map(({ type, ...b }) => ({
			type,
			text: b[type].rich_text[0].plain_text
		}))
</script>
