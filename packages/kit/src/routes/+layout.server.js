import notion from '$utils/notion'
import { NOTION_DB_ID } from '$env/static/private'

export async function load() {
	return {
		db: await notion.databases.query({
			database_id: NOTION_DB_ID,
			filter: {
				property: 'Status',
				status: {
					equals: 'Published'
				}
			}
		})
	}
}
