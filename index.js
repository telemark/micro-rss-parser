'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const getFeed = require('./lib/get-feed')

module.exports = async (request, response) => {
  const data = request.method === 'POST' ? await json(request) : parse(request.url, true).query
  if (data.rss) {
    const parsed = await getFeed(data.rss)
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    send(response, 200, parsed)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
