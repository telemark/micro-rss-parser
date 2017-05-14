'use strict'

const axios = require('axios')
const FeedMe = require('feedme')

module.exports = async rss => {
  const results = await axios(rss)
  const parser = new FeedMe(true)
  parser.write(results.data)
  return parser.done()
}
