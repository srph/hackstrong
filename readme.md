[![hackstrong_by_seraphipod-d88be78](http://seraphipod.deviantart.com/art/Hackstrong-497697956)]

# hackstrong

The website template (*pre-release*) for the first hackstrong event. The codebase was later modified and changed upon production.

## Previews

- [Actual Demo](https://srph.github.io/hackstrong)
- [Preview](https://srph.github.io/hackstrong/preview.html)
- [Design (desktop / older)](http://seraphipod.deviantart.com/art/Hackstrong-older-499976508)
- [Design (mobile)](http://seraphipod.deviantart.com/art/Hackstrong-Mobile-older-499976686)

## Building

I don't know why you'd want to (when there's a demo, noob), but here --

```bash
$ git clone https://github.com/srph/hackstrong.git && cd hackstrong
$ npm install
$ bower install
```

### Automation

```bash
# runs both server and less
# probably the only task thing you'll need to run
$ gulp

# some methods I doubt you would need, but here --
$ gulp server # spawns a web server (to run the project locally)
$ gulp less # compiles less -> watches for file changes (autoprefix, etc..)
```

You're good to go.

## Acknowledgement

**hackstrong** © 2015+, Sourcescript Innovations.

### Contributors:

Many thanks to these fellas:

- Kier Borromeo ([srph](https://github.com/srph) | [@_srph](https://twitter.com/_srph))
- Mark Penaranda ([markpenaranda](https://github.com/markpenaranda) | [@markpenaranda](https://twitter.com/markpenaranda))
- Kirby Borromeo ([KirbyBubbles](https://github.com/KirbyBubbles) | [@kirby](https://twitter.com/KirbyBubbles))