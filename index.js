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
    const readme = `
      Usage
      *****************************
      
      GET ?rss=your-rss-url

      curl -v https://echo.mikrotjeneste.win?rss=https://www.telemark.no/rss/feed/aktuelt

      POST { "rss": your-rss-url }

      curl -v https://parse.rss.tjeneste.win -d '{"rss": "https://www.telemark.no/rss/feed/aktuelt"}'
    `
    send(response, 200, readme)
  }
}
