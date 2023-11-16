---
title: Hypercore Protocol - Revitalizing Peer-to-Peer Technology
description: "Reviewing an interesting approach to distributed computing"
date: March 21, 2023
---

The World Wide Web, or commercially available internet access, was touted as a revolutionary technology that was destined to change the way we lived our lives; this was the popular narrative throughout and especially during the peak of the dot-com bubble. While it is true that a substantial majority of those dot-com stocks have long since gone bankrupt, it is also true that commercialized internet access has revolutionized our daily lives.

Following the early days of static, isolated and less-scalable web interfaces of so-called Web 1.0 came the burgeoning new industry of social-networking-as-a-service. Those paying attention, however, notice that there has never been an explicit fee for those such services; as the adage goes, “if a product you use is free, then you are the product.” It is public knowledge at this point, that these walled-garden social media platforms collect their users’ data, package it up, and sell it to the highest bidder — be they advertisers, marketing and analytics firms, or more nefariously, authoritarian governments seeking to nudge their citizens one way or another.

To be sure, Web 2.0 has raised the bar with respect to user experience and engagement. Still, the industry has done so at the expense of their user’s privacy, safety, and data sovereignty. This has led to a coalescence of power at the top, in the hands of a few tech firms in Silicon Valley.

These centralized platforms then, necessarily become centralized chokepoints, single sources of failure that can have disastrous knock-on effects for those who rely on their services. In addition to this, those same platforms control a majority of the cloud computing (and infrastructure) market share. Based on figures compiled by the Synergy Research Group, as of Q3 2022 — Amazon Web Services, Microsoft Azure, and Google Cloud businesses totaled 66% of global revenues in the industry.

As a result of these factors, users are left to interface with the web in a completely centralized — and therefore censorable — fashion, with little to no recourse. That is unless they choose to operate on a different plane entirely.

## Peer-to-Peer

Cypherpunks of the late 80s and 90s sought the utilization of cryptography in order to encrypt their communications _with each other_ — as opposed to creating tokens on a cryptography-verifiable blockchain whose greatest purpose may well have been speculation (e.g. FTT token).

Cryptography, in its modern use, was always intended to secure the transfer of data between peers. When interacting with Web 2.0 platforms, users have no choice but to invite a third party into their communications (the platforms themselves). While it is a shame that more web users are not better informed as to the trade-offs associated with narrow gateways, solutions are being actively developed to shift web interfaces back to peer-to-peer protocols.

Conversely, the [Hypercore Protocol](https://hypercore-protocol.org/) leverages a series of modular technical specifications in order to create networked datasets which users can seed in a distributed mesh, and also includes a variety of tools for connecting devices, streaming data and running services. These capabilities are possible through users’ peer-to-peer connections, which are the basis of data transmission.

## The Core of the Hypercore Protocol

The centerpiece of, and base of the broader Hypercore protocol are the so-called "[Hypercores](https://hypercore-protocol.org/guides/modules/hypercore/)". A hypercore is an [append-only log](https://en.wikipedia.org/wiki/Append-only), meaning that it is a data structure such that new data can be added to storage, but where existing data is immutable.

Such a structure has many benefits, like increasing performance, ensuring data consistency and permitting rollbacks. A useful comparison for hypercores is to imagine them as a “personal blockchain,” a self-owned list of binary blocks with an immutable history, secured by cryptographic proofs — [digital signatures](https://bitdern.com/posts/priv-pub-key-sigs), to be specific.

It is important to note that a hypercore can only have a single writer on a single machine; the creator of the hypercore is the only person able to modify it, as they are the only one with the private key to do so. Another similarity between hypercores and blockchains is the use of [Merkle trees](https://www.investopedia.com/terms/m/merkle-root-cryptocurrency.asp): a hypercore will build a Merkle tree — a hash value of each block of data — out of its blocks, that that readers can always verify that the log has not been tampered with.

The data contained within a hypercore can be accessed and downloaded by other users on an on-demand basis, the result is that users select only the information that they wish to replicate, and thus save time and storage during the downloading process. This system is dissimilar to a “full node” in bitcoin, as an example, which meticulously downloads _every single block_ upon initial start up (and each subsequent, new block into the future).

Once a peer has downloaded a block, the data is cached locally, on their device. This download will only happen once. As with BitTorrent, readers download blocks from many connected peers in parallel; those peers can also be notified when a hypercore has added more blocks onto itself.

Hypercores are identified by two key properties: a public key and a discovery key, where the discovery key is a hash value of the public key. The public key gives a peer reader capability — if a user knows the public key associated with a hypercore, they can exchange blocks with other peers. Without this key, a peer is unable to validate blocks and the hypercore transport protocol will block replication. Since the discovery key is a (BLAKE2b) hash value of the public key, it can be shared openly so as to disseminate the data stored within the hypercore.

## Supporting Modules of the Hypercore Protocol

[Corestores](https://hypercore-protocol.org/guides/modules/corestore/) are a low-level module that run in conjunction with hypercores as a means to build more complicated data structures. A corestore is designed to efficiently store and replicate multiple sets of interlinked hypercores, such as those used in higher-level structures, which we will cover in a later section. Corestores effectively abstract away the responsibilities of managing custom storage/replication code from such higher-level structures.

There are [four key support functions](https://github.com/hypercore-protocol/corestore) that corestores provide large collections of hypercores.

1. First is key derivation — all writable hypercore keys are derived from a single master key and a user-provided name.
2. In order to reduce the bandwidth demand of a single hypercore being loaded multiple times, corestores ensure that the underlying resources are only opened once.
3. Third, corestores enable hypercores to be stored in any [random-access-storage instance](https://en.wikipedia.org//wiki/Random-access_memory), where they will be indexed by their discovery keys.
4. Finally, namespacing; a single corestore instance can be shared between multiple applications or components without worrying about naming collisions by creating “namespaces.”

Where hypercores are the base-level structures, and where corestores manage the storage of base-level structures, the [Hyperswarm](https://hypercore-protocol.org/guides/modules/hyperswarm/) module is the means by which peers interested in the same sorts of information can find each other. One could think about hyperswarms as user-interest indexes, where their primary purpose is to connect peers to hypercores that would be valuable to them, but the structure is such that hyperswarms can also be used for more general P2P applications.

A hyperswarm is a distributed hash table (DHT) developed for discovering and connecting with other peers, primarily for the purpose of peer-to-peer hypercore replication. A [DHT](https://www.educative.io/answers/what-is-a-distributed-hash-table) is a decentralized storage system that provides lookup and storage schemes similar to a hash table, by storing key value pairs — discovery keys, in this case.

Each node in a DHT is responsible for keys as well as mapped values; as such, any node can efficiently retrieve the value associated with a given key. Hyperswarm, and other DHTs, are decentralized and autonomous meaning that each node collectively forms the network without any central authority — similar to the bitcoin network.

It is also similar to the bitcoin (mining) network in that the system is robust enough to function well with many nodes leaving, joining, and failing at all times. The nodes in a DHT are connected through an overlay network in which neighboring nodes are connected. This network allows the nodes to find any present key in the key-space.

## Higher-Level Structures in the Hypercore Protocol

It is unlikely that many (if any) peer-to-peer application users will frequently interact with lower-level structures such as hypercores, corestores and hyperswarms. More likely they will be interacting with programs built on top of the higher-level structures, which we will discuss in this section.

[Hyperbees](https://hypercore-protocol.org/guides/modules/hyperbee/) are append-only B-trees that can be used to build peer-to-peer databases. [B-trees](https://en.wikipedia.org/wiki/B-tree) are self-balancing data structures that maintain stored data, and allow for searches, sequential access, insertions and deletions in logarithmic time; B-trees are well suited for storage systems that read and write large blocks of data, like a series hypercores.

Hyperbees provide a key/value-store API, with methods for getting and inserting key/value pairs by atomically batching insertions and creating sorted iterators. This is accomplished by using a single hypercore for storage, via a technique called embedded indexing.

By utilizing the embedded index, hyperbees can satisfy a range of queries without needing to do a full scan. As with hypercores, peers can selectively download the data pertaining to their interest and by using hyperbees, the scope of available data increases substantially. Other useful features include version control — where users can review “snapshots” of previous versions of the database. Along with that, hyperbees can efficiently detect any differences between snapshots of two databases.

Perhaps the most exciting structure that has been developed in the Hypercore Protocol stack is the [Hyperdrive](https://hypercore-protocol.org/guides/walkthroughs/sharing-files-with-hyperdrive/). Hyperdrives are likely to familiar to users, as they are intended to function similarly to a Google Drive.

Hyperdrives are secure, real-time distributed file systems designed for easy peer-to-peer file sharing. As with the other structures in the hypercore stack, a hyperdrive can only have a single writer on a single machine; for the same reason that only one person has the private keys necessary to write changes to the drive.

Hyperdrives are built on top of two hypercores — one of which stores metadata, and the other stores file content.

The enabled features for hyperdrives are similar to other modules in the stack: sparse, on-demand downloading is a default, which allows for media to be streamed from peers without any buffering. Due to the construction of the drive — on top of two hypercores — file metadata is easily accessible, and files can be located with minimal lookups.

[Composability](https://github.com/hypercore-protocol/hyperdrive) is another key aspect of hyperdrives: by using a mount system, hyperdrives can be nested inside of other drives, thus enabling powerful multi-user collaboration tools. Files are versioned by default, so that peers can see historical changes and prevent unwanted data loss. Finally, users can share entire hyperdrives with peers by sending them a single 32-byte key — the drive’s discovery key.

## Conclusion

During tumultuous times in the market such as we are currently experiencing, we must all remember that price action is first and foremost driven by human psychology — the psychology of crowds, specifically.

Regardless of price action, what is clear during this bear-cycle is that those who are passionate about technology, and its potential to better our daily lives, have not stopped building. The Hypercore Protocol is just one example of a focused, mission-driven team. This piece was meant to highlight the similarities (and differences) between the Hyper-stack’s peer-to-peer data structures, and those of the now-commodified blockchain industry.

Bear markets are a great time to build, and to refresh ourselves on the fundamentals of the underlying technologies we’re invested in. It is also a great opportunity to refocus ourselves on the original intent of the cypherpunks that came before us: to free humanity from the draconian surveillance state by enabling users to take and retain control of their data.
