import notion from '$utils/notion'
import { getName } from '$utils/notion-utils'
import slug from '$utils/slug'
import { error } from '@sveltejs/kit'

export async function load({ params, parent }) {
	const { db } = await parent()

	const result = db.results
		.find(data => slug(getName(data, 'Name')) === params.slug)

	if (!result?.id) {
		throw error(404, 'The article you\'re looking for doesn\'t exist... 🤷‍♂️')
	}

	return {
		page: await notion.pages.retrieve({ page_id: result.id }),
		blocks: await notion.blocks.children.list({ block_id: result.id }),
	}
}
