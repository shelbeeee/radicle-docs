---
id: glossary
title: Glossary
---

## checkout
To create a working copy of a [project][pr]. This working copy is where a
[user][us] can make and publish changes to source code of a project via 'git
push rad'. For more on how checking out works in Radicle, see [Working
Copies][wc].

## connect
To create a network connection to another Radicle [peer][pe]. Connected peers
spread information between each other via gossip.

## contributor
A [user][us] who has pushed and published changes to another user's
[project][pr]. Once a user contributes to a project, it is added to their `My
Projects` tab.

## display name
A changeable and non-unique human-readable name chosen by the [user][us]. It can
seen like a "nickname" for a user's [Radicle ID][ri]. This will be possible to
change in the future. 

## follow
Following a [project][pr] or [user][us] (technically a [peer][pe]) replicates
its data to the your machine (See [Tracking][tr]). This allows the follower to
subscribe to updates from the project or peer and signal interest by further
replicating the data across their network, making it available to other peers.

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers
to disseminate information. Participants in the Radicle network share and spread
data by keeping redundant copies of projects locally and sharing updates with
peers. This allows data to be disseminated according to use and value: the more
peers who are interested in certain data the more available it is made to the
network. See [Gossip][gp].

## maintainer
A [user][us] who manages updates to the canonical view of a project. A
maintainer is explicitly associated with the [project][pr] at the time of
creation or later, via the metadata of a project's identity document ([See Data
Model][dm]). At creation, the creator of the [project][pr] is the sole
maintainer, but in the future there may be multiple maintainers of a project,
all maintaining their own trees.


## main
How radicle-upstream refers to the default development branch of a project.

## node
A peer running an instance of the Radicle Link protocol. There can only one node
running per device.

## passphrase
A sequence of characters used to encrypt a peer's private key to enable access
to the Radicle network. It's also needed to fetch and push changesets to the
Radicle network. See [Identities][id].

## peer
A device running the Radicle Link protocol.

## Device ID
The encoding of a peer's public key tied to their device. In the Beta, there
will only be one Device ID per user. See [Identities][id].


## project
A [project][pr] consists of source code, issues, and proposed changesets. It
carries a unique, shareable [Radicle ID][ri]. A [project][pr] also includes the
identities of its [maintainers](maintainers). The entirety of the [project][pr]
data and metadata, including social artifacts such as comments, are stored
within the [project][pr]'s [repository][re] on a peer's machine. In Radicle,
[project][pr]s are the principle unit of replication.

## project name
A human-readable [project][pr] name that is chosen for a project upon creation.
It is not guaranteed to be unique.

## publish
To make data public to the network. Once something is published, it may be
fetched and replicated by connected peers.

## Radicle ID
A unique shareable identifier for users and projects in the Radicle Network.
Radicle IDs are usually shared as URNs.

## Radicle Link
A peer-to-peer replication protocol built on Git. See [How it Works][hw].

## Radicle network
The network of peers that replicate and gossip data with Radicle Link.

## radicle-upstream
A desktop application (graphic user interface, GUI) built to interact with and
enable access to the Radicle Network and, initially, as the primary
end-[user][us] experience. In the future, it will be one of many potential
clients that [user][us]s can use to access the Radicle Network.

## remote
Another peer's view of a project. Remotes can be pulled/fetched from.
Maintainers of a project may choose to track other peer's views of their project
by adding them as a remote. In the context of a project, maintainers of a
repository may choose to track the views of other owners (this is called a
remote in Git terminology: a named reference to a remote repository). If the
remote repository is found to track other remotes, the tracking repository shall
also transitively track those, up to a configurable N degrees out (currently in
the works). See more about [Tracking][tr].

## seed
An always-on node that automatically tracks discovered projects and serves data
to their connected peers, thereby increasing the availability of these projects
on the network. More on the [role and impacts of seeds][se].

## upstream
The [repository][re] in which code contributions for a [project][pr] are
intended to be merged once they pass the review process (i.e. canonical upstream
or mainline). The upstream is often the [repository][re] of the [project][pr]'s
original maintainer or creator. For everyone but the creator of this
[repository][re], upstream will be a remote [repository][re].

## user
Any individual who has created a Radicle ID on the Radicle network. A user is
associated one or many peers on the Radicle network.


[br]: #branch

[pe]: #peer
[pr]: #project
[re]: #repository
[ri]: #radicle-id
[us]: #user

[dm]: /how-it-works.md/#data-model
[gp]: /how-it-works.md/#replication-model
[hw]: /how-it-works.md
[id]: /how-it-works.md/#identities
[se]: /how-it-works.md/#seeding
[tr]: /how-it-works.md/#tracking
[wc]: /how-it-works.md/#working-copies
