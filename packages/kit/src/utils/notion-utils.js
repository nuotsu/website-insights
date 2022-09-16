export const getName = ({ properties }, property) => properties[property].title[0].plain_text

export const getDate = ({ properties }) => properties.Date?.date?.start
