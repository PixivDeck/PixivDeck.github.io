// @flow
const prod = process.env.NODE_ENV === 'production'
export const STATIC_PATH = prod ? '/PixivDeck-web/static' : '/static'
