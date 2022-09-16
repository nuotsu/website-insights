import { Client, LogLevel } from '@notionhq/client'
import { env } from '$env/dynamic/private'

const notion = new Client({
	auth: env.NOTION_TOKEN,
	// logLevel: LogLevel.DEBUG,
})

export default notion
