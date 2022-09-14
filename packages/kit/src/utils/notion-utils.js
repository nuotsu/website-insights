export function getProperty({ properties }, property) {
	return properties[property].title[0].plain_text
}
