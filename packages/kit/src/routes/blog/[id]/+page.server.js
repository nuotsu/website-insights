import notion from '$utils/notion'

export async function load({ params }) {
	return {
		page: await notion.pages.retrieve({ page_id: params.id }),
		blocks: await notion.blocks.children.list({ block_id: params.id }),
	}
}
