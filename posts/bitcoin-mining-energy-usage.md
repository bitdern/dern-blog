---
title: My Thoughts on Energy Use in Bitcoin Mining
description: "An alternative perspective on the bitcoin mining sector's energy usage."
date: March 2, 2023
---

> This post was initially drafted and published in July 2022.

A primary goal of mine in writing these posts is to produce educational content that explains the technical processes that underlie the bitcoin network. An earlier [post](https://bitdern.com/posts/priv-pub-key-sigs) dug deep into the details of private and public key pair cryptography, digital signatures, and how those technologies coalesce in bitcoin. This post will explore a prescient, cultural (moral?) topic: the energy used by bitcoin’s proof-of-work mining process.

Proof-of-work mining is an energy-intensive process; specialized hardware devices around the world expend compute resources by executing trillions of data hashes per second, in an attempt to receive a block reward subsidy as compensation for producing the next block (and securing the network, as a by-product). Critics of the system often cite that bitcoin’s global energy usage amounts to roughly 0.5% of total consumption, greater than Finland's yearly consumption. The point missed in these characterizations is that the bitcoin network is agnostic as to what form of electricity is used as an input.

When one abstracts away dogmas in the energy sector, an evaluation scheme for energy sources becomes clear. Three characteristics can be used to evaluate the usefulness of different energy sources: reliability, abundance, and cost.

For example, the wind is abundant, but it is a variable resource in nature and is not suitable for all geographical locations. Solar power is reliable in areas where sunny days are abundant, but the sun does not shine at night — and power grids need a consistent supply of base load. Both technologies mentioned above also require a significant amount of government subsidization to remain profitable enterprises (in the United States).

_What if there were a technology powered by a process that necessitated electricity utilization, regardless of the cost? And what if that process was infinitely flexible and sensitive to the demands of residential power grids?_

This post will cover:

- Recent reports from the Bitcoin Mining Council, juxtaposed against popular criticisms.
- How bitcoin mining can help to “balance” power grids by buying excess supply and having demand flexibility.
- How bitcoin mining has incentivized emission-reducing practices in the Oil and Gas industry.
- The potential for bitcoin mining to add revenue streams to any source of power generation.

## Sunlight as Disinfectant

The [Bitcoin Mining Council](https://bitcoinminingcouncil.com/) is a voluntary and open forum for bitcoin mining companies and other companies in the bitcoin industry. Their mission is to increase the transparency of bitcoin mining while educating the public on the benefits of bitcoin, and bitcoin mining. Darin Feinstein, co-founder of Core Scientific states in the Bitcoin Mining Council’s Q2 report that “sunshine is the best disinfectant,” with that in mind, let’s review some of findings.

Participants in the survey (which informed the [Q2 report](https://bitcoinminingcouncil.com/bitcoin-mining-electricity-mix-increased-to-59-5-sustainable-in-q2-2022/)) accounted for 107.7 exahash (EH) as of the end of June — this represents roughly 50% of the network’s global hashrate. The energy utilized was composed of a 66.8% sustainable power mix, and from those figures, the global sustainable power mix of the bitcoin network is estimated to be ~59.5%. The data indicates a 6% increase in the global sustainable power mix, year-over-year.

Michael Saylor, CEO, and co-founder of Microstrategy, made the following comment as a part of the report:

> In the second quarter of 2022, the hashrate and related security of the Bitcoin Network improved by 137% year-on-year while energy usage only increased 63%. We observed a 46% year-on-year increase in efficiency due to advances in semiconductor technology, the rapid expansion of North American mining, the China Exodus, and the worldwide adoption of sustainable energy and modern bitcoin mining techniques.

The figures noted by Mr. Saylor above reflect positively on the trajectory of the bitcoin mining industry — especially as it relates to the industry’s coexistence with environmental responsibility. Voluntarism is an important factor in the ethos of the bitcoin network: anyone is allowed to use the network to transact, operate their own node to verify data for themselves. The same person is similarly allowed to leave the network if ever they so choose.

Reports published by the Bitcoin Mining Council are an example of how voluntary action — coupled with intentional transparency — can work to change public perception of a seemingly opaque industry.

## Holding the Tension of Opposites

In the way that the sources of our food have been obfuscated in modern times, the average person is unaware of how electricity is available for use, on-demand.

The availability is thanks to [power grids](https://www.cfr.org/backgrounder/how-does-us-power-grid-work): a vast network of power plants, transmission lines, distribution centers, and distribution lines. In order for electricity to be available for use on-demand, there must be a consistent and reliable amount of baseload power on the grid. In the past, when fossil fuels generated the majority of grids’ base load, grid operators had an easier time balancing power demand. This is due to fossil fuel power plants having consistent uptimes — meaning that they are operational the majority of the time.

In recent years, renewable power generation sources have been added to grids as the political appetite increased, and technological advances made such integrations feasible. The proliferation of renewable power generation does, on one hand, reduce emissions. However, an unintended consequence of the trend is that certain generation sources are intermittent by nature, and increased reliance on intermittent sources increases stress on power grids.

The sun doesn’t always shine, and the wind doesn’t always blow; power grids that rely too heavily on renewables are at risk of generating too much and too little electricity, the key is balance. In order to achieve this balance, grids rely on sources of electricity that can be dispatched [on demand](https://twitter.com/level39/status/1548550264218583040), at the request of grid operators.

In practice, these sources are predominantly natural gas plants, with coal and nuclear plants making up a smaller share. All power generation facilities take time to come online, for example, nuclear generation facilities can take between 2 and 10 hours to start up:
![img](/public/powergenstarttime.png)

Consider a situation where, due to a source of renewable generation being unavailable, an operator requests a nuclear or coal plant to be activated: everything functions as intended until the renewable sources are back online. At that point, an excess supply of power exists with no buyers. In areas like West Texas where renewable generation is an increasingly larger component of grids, [negative](https://twitter.com/ShaunEnergy/status/1507862059169419267) energy prices have become more prevalent. When there is excess supply on the grid, operators are sometimes incentivized to pay customers to use power. Enter co-located bitcoin mining operations.

Because proof-of-work hashing is energy-intensive, bitcoin mining operations are uniquely positioned to be “buyers of last resort” for any excess power on the grid. As such, mining companies might sell insurance products (demand response programs) to grid operators that ‘hedge’ for [scenarios](https://cryptobriefing.com/bitcoin-miners-shut-down-in-texas-to-help-energy-grid/) where demand for power rises to such a point that miners voluntarily power down their machines, in return for compensation. Bitcoin mining is proving itself to be an effective means of balancing power grids: buying excess supply when no one else will and voluntarily curtailing power usage when demand is elevated.
