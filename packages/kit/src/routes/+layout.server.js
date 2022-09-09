import { Client } from '@notionhq/client'
import { NOTION_TOKEN, NOTION_DB_ID } from '$env/static/private'

const notion = new Client({ auth: NOTION_TOKEN })

export async function load() {
	const db = await notion.databases.query({
		database_id: NOTION_DB_ID,
		filter: {
			property: 'Status',
			status: {
				equals: 'Published'
			}
		}
	})

	return {
		db
	}
}
