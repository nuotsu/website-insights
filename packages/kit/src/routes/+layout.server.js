import notion from '$utils/notion'
import { NOTION_DB_ID } from '$env/static/private'
import { dev } from '$app/environment'

export async function load() {
	return {
		db: await notion.databases.query({
			database_id: NOTION_DB_ID,
			filter: !dev
				? {
					property: 'Status',
					status: {
						equals: 'Published'
					}
				} : undefined
		})
	}
}
