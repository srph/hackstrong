[![hackstrong_by_seraphipod-d88be78](https://cloud.githubusercontent.com/assets/5093058/6824669/4184757c-d32f-11e4-9169-5848c7c6a8bb.png)](http://seraphipod.deviantart.com/art/Hackstrong-497697956)

# hackstrong

The website template (*pre-release*) for the first hackstrong event. The codebase was later modified and changed upon production.

\* Codebase was poorly written.. ehh -- but it works -- *It Just Works&#8482;*.

## Previews

- [Actual Demo](https://srph.github.io/hackstrong)
- [Preview](https://srph.github.io/hackstrong/preview.html)
- [Design (desktop / older)](http://seraphipod.deviantart.com/art/Hackstrong-older-499976508)
- [Design (mobile)](http://seraphipod.deviantart.com/art/Hackstrong-Mobile-older-499976686)

## Setup

I don't know why you'd want to (when there's a demo, noob), but here --

First, you'll need [**Node.js**, and **npm**]. And then setting up locally is easy a 1, 2, 3.

```bash
# if you haven't installed `gulp` and/or `bower` before
$ npm install -g gulp bower

# clone
$ git clone https://github.com/srph/hackstrong.git && cd hackstrong
# install dependencies
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