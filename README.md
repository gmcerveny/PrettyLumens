# Pretty Lumens

Pretty Lumens is a creative way to visualize transcation streams on the Stellar network.  It can be used as an interactive donation display for artists or anyone else who wants to watch contributions.

Pretty Lumens started as a creative coding experiment, asking, what is the digital equivalent of a tip jar?  It uses p5.js and the stellar SDK. Inspired by Daniel Shifman's [The Nature of Code](http://natureofcode.com). 

## Inspiration

We have many ways we see currency physically moving in the world. We see tip jars in coffee shops and musicians open cases as they busk on the street. We also have public installations like water fountains where coins, whether intended or not, end up collecting. There’s certainly some connection here beyond the simple transfer of money.

Where might we find something like this?

Perhaps:
- A new musician displaying their tablet with an address, when you send a tip, the art changes
- A projection at a live concert or in another physical space, multiple participants might send a small tip to collectively build up something bigger
- A screen in an otherwise remote artists studio, seeing a tip come in, knowing their art is appreciated somewhere far away

## 01 Fade

[Fade Example](http://www.gregcerveny.com/PrettyLumens/01-Fade/)

Money is more than a store of value.  There is often an interaction attached to a transaction as well as a visual response. When a trnasaction is complete, after time, it fades from the active memory of each participant.

Here, small circles are fading away as lumens trade hands on the Stellar network. Big circles for big amounts, small circles for small amounts.

This is currently setup to watch all tansactions happening on Horizon. It could easily modified to watch a single address as in the Orbit example.

## 02 Orbit

[Orbit Example](http://www.gregcerveny.com/PrettyLumens/02-Orbit/)

When we drop money into tip jars and wishing wells they have long lasting visual effects. Rather than an ephemeral flash of a transaction, a collection slowly builds.

In this visualization, a Stellar address is entered and then that wallet is watched. As new payments (or tips) arrive, they appear scaled to their amount. The payments gravitate and orbit indefinitely. Unless the owner decides to restart or enter a new address, which would visually empty the tip jar.

Transactions visualized inbound to a single address. Hitting 'G' on the keyboard exposes an input field, an address is entered, and then all payments inbound are displayed.
