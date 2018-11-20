[![Build Status](https://travis-ci.org/telemark/micro-rss-parser.svg?branch=master)](https://travis-ci.org/telemark/micro-rss-parser)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-rss-parser
Parse rss to json

```bash
$ curl -v https://parse.rss.tjeneste.win -d '{"rss": "https://www.telemark.no/rss/feed/aktuelt"}'
```

```bash
$ curl -v https://echo.mikrotjeneste.win?rss=https://www.telemark.no/rss/feed/aktuelt
```

Both returns

```JavaScript
{
  type: "rss 2.0",
  title: "Aktuelt fra Telemark fylkeskommune",
  link: "http://www.telemark.no/",
  description: "",
  language: "no-bokmaal",
  managingeditor: "post@t-fk.no (Geir Gåsodden)",
  pubdate: "Sun, 14 May 2017 08:02:08 +0000",
  lastbuilddate: "Sun, 14 May 2017 08:02:08 +0000",
  generator: "eZ Components Feed dev (http://ezcomponents.org/docs/tutorials/Feed)",
  docs: "http://www.rssboard.org/rss-specification",
  atom:link: {
    href: "http://www.telemark.no/rss/feed/aktuelt",
    rel: "self",
    type: "application/rss+xml"
  },
  items: [
    {
      title: "Støtte til Bluesfestivalen ",
      link: "http://www.telemark.no/Aktuelt/2017/Stoette-til-Bluesfestivalen",
      description: "<p>Hovedutvalg for kultur, idrett og folkehelse i Telemark fylkeskommune har enstemmig gått inn for intensjonsavtalen om 5-årig støtte til Notodden Bluesfestival. St@tten er på 930 000 kroner i året i fem år.</p>",
      author: "post@t-fk.no (Sigmund Bolme)",
      category: "",
      guid: {
        ispermalink: "false",
        text: "ed86b8adae370cb45f108a8f1d1f3eb1"
      },
      pubdate: "Fri, 12 May 2017 13:41:03 +0000"
    },
    {
      title: "Signerte partnerskapsavtaler for folkehelse",
      link: "http://www.telemark.no/Aktuelt/2017/Signerte-partnerskapsavtaler-for-folkehelse",
      description: "<p>Torsdag signerte Telemark fylkeskommune partnerskapsavtaler for folkehelse med fem frivillige organisasjoner. Partnerskapsavtalene skal bidra til å gi viktige frivillige organisasjoner i Telemark forutsigbarhet i arbeidet sitt, og er en viktig satsing for fylkeskommunen.&nbsp;</p>",
      author: "post@t-fk.no (Sigmund Bolme)",
      category: "",
      guid: {
        ispermalink: "false",
        text: "47554b259da8f1a74dd01b8ae907e3ac"
      },
      pubdate: "Fri, 12 May 2017 11:00:02 +0000"
    }
  ]
}
```

## Deploy using [Now](https://zeit.co/now)

```bash
$ now https://github.com/telemark/micro-rss-parser
```

## License

[MIT](LICENSE)
