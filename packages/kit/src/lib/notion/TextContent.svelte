{@html html}

<script>
	export let content, annotations

	const enabled = Object.entries(annotations)
		.filter(([key, value]) => !!value && key)

	const start_tags = enabled
		.map(([key, value]) => {
			switch (key) {
				case 'bold': return '<strong>'
				case 'italic': return '<em>'
				case 'strikethrough': return '<s>'
				case 'underline': return '<u>'
				case 'code': return '<code>'
				case 'color':
					if (value !== 'default') return `<span class="${ value }">`
				default: return
			}
		})
		.join('')

	const end_tags = enabled
		.reverse()
		.map(([key, value]) => {
			switch (key) {
				case 'bold': return '</strong>'
				case 'italic': return '</em>'
				case 'strikethrough': return '</s>'
				case 'underline': return '</u>'
				case 'code': return '</code>'
				case 'color':
					if (value !== 'default') return `</span>`
				default: return
			}
		})
		.join('')

	const html = [start_tags, encodeHtml(content), end_tags].filter(Boolean).join('')

	function encodeHtml(str) {
		return str.replace(/[\u00A0-\u9999<>\&]/g, i => '&#'+i.charCodeAt(0)+';')
	}
</script>
