(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{513:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cosmos-hub-2-upgrade-instructions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-2-upgrade-instructions"}},[e._v("#")]),e._v(" Cosmos Hub 2 Upgrade Instructions")]),e._v(" "),o("p",[e._v("The following document describes the necessary steps involved that full-node operators\nmust take in order to upgrade from "),o("code",[e._v("cosmoshub-2")]),e._v(" to "),o("code",[e._v("cosmoshub-3")]),e._v(". The Tendermint team\nwill post an official updated genesis file, but it is recommended that validators\nexecute the following instructions in order to verify the resulting genesis file.")]),e._v(" "),o("p",[e._v("There is a strong social consensus around proposal "),o("code",[e._v("Cosmos Hub 3 Upgrade Proposal E")]),e._v("\non "),o("code",[e._v("cosmoshub-2")]),e._v(". This indicates that the upgrade procedure should be performed\non "),o("code",[e._v("December 11, 2019 at or around 14:27 UTC")]),e._v(" on block "),o("code",[e._v("2,902,000")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#preliminary"}},[e._v("Preliminary")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#major-updates"}},[e._v("Major Updates")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#risks"}},[e._v("Risks")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#recovery"}},[e._v("Recovery")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#upgrade-procedure"}},[e._v("Upgrade Procedure")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#notes-for-service-providers"}},[e._v("Notes for Service Providers")])])]),e._v(" "),o("h2",{attrs:{id:"preliminary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preliminary"}},[e._v("#")]),e._v(" Preliminary")]),e._v(" "),o("p",[e._v("Many changes have occurred to the Cosmos SDK and the Gaia application since the latest\nmajor upgrade ("),o("code",[e._v("cosmoshub-2")]),e._v("). These changes notably consist of many new features,\nprotocol changes, and application structural changes that favor developer ergonomics\nand application development.")]),e._v(" "),o("p",[e._v("First and foremost, the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1),e._v(" and the\n"),o("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),o("OutboundLink")],1),e._v(" application have been split into separate\nrepositories. This allows for both the Cosmos SDK and Gaia to evolve naturally\nand independently. Thus, any future "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases"),o("OutboundLink")],1),e._v("\nof Gaia going forward, including this one, will be built and tagged from this\nrepository not the Cosmos SDK.")]),e._v(" "),o("p",[e._v("Since the Cosmos SDK and Gaia have now been split into separate repositories, their\nversioning will also naturally diverge. In an attempt to decrease community confusion and strive for\nsemantic versioning, the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1),e._v(" will continue\non its current versioning path (i.e. v0.36.x ) and the "),o("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),o("OutboundLink")],1),e._v("\napplication will become v2.0.x.")]),e._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),o("OutboundLink")],1),e._v(" application v2.0.3 is\nwhat full node operators will upgrade to and run in this next major upgrade")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"major-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#major-updates"}},[e._v("#")]),e._v(" Major Updates")]),e._v(" "),o("p",[e._v("There are many notable features and changes in the upcoming release of the SDK. Many of these\nare discussed at a high level in July's Cosmos development update found\n"),o("a",{attrs:{href:"https://blog.cosmos.network/cosmos-development-update-july-2019-8df2ade5ba0a",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Some of the biggest changes to take note on when upgrading as a developer or client are the the following:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Tagging/Events")]),e._v(": The entire system of what we used to call tags has been replaced by a more\nrobust and flexible system called events. Any client that depended on querying or subscribing to\ntags should take note on the new format as old queries will not work and must be updated. More in\ndepth docs on the events system can be found "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/rpc/core/events.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".\nIn addition, each module documents its own events in the specs (e.g. "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.36.0/docs/spec/slashing/06_events.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("slashing"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[o("strong",[e._v("Height Queries")]),e._v(": Both the CLI and REST clients now (re-)enable height queries via the\n"),o("code",[e._v("--height")]),e._v(" and "),o("code",[e._v("?height")]),e._v(" arguments respectively. An important note to keep in mind are that height\nqueries against pruning nodes will return errors when a pruned height is queried against. When no\nheight is provided, the latest height will be used by default keeping current behavior intact. In\naddition, many REST responses now wrap the query results in a new structure "),o("code",[e._v('{"height": ..., "result": ...}')]),e._v(".\nThat is, the height is now returned to the client for which the resource was queried at.")])]),e._v(" "),o("h2",{attrs:{id:"risks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),o("p",[e._v("As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of\ndouble-signing and being slashed. The most important piece of this procedure is verifying your\nsoftware version and genesis file hash before starting your validator and signing.")]),e._v(" "),o("p",[e._v("The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade\nprocedure again during the network startup. If you discover a mistake in the process, the best thing\nto do is wait for the network to start before correcting it. If the network is halted and you have\nstarted with a different genesis file than the expected one, seek advice from a Tendermint developer\nbefore resetting your validator.")]),e._v(" "),o("h2",{attrs:{id:"recovery"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recovery"}},[e._v("#")]),e._v(" Recovery")]),e._v(" "),o("p",[e._v("Prior to exporting "),o("code",[e._v("cosmoshub-2")]),e._v(" state, validators are encouraged to take a full data snapshot at the\nexport height before proceeding. Snapshotting depends heavily on infrastructure, but generally this\ncan be done by backing up the "),o("code",[e._v(".gaia")]),e._v(" directories.")]),e._v(" "),o("p",[e._v("It is critically important to back-up the "),o("code",[e._v(".gaia/data/priv_validator_state.json")]),e._v(" file after stopping your gaiad process. This file is updated every block as your validator participates in a consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.")]),e._v(" "),o("p",[e._v("In the event that the upgrade does not succeed, validators and operators must downgrade back to\nv0.34.6+ of the "),o("em",[e._v("Cosmos SDK")]),e._v(" and restore to their latest snapshot before restarting their nodes.")]),e._v(" "),o("h2",{attrs:{id:"upgrade-procedure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": It is assumed you are currently operating a full-node running v0.34.6+ of the "),o("em",[e._v("Cosmos SDK")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("The version/commit hash of Gaia v2.0.3: "),o("code",[e._v("2f6783e298f25ff4e12cb84549777053ab88749a")])]),e._v(" "),o("li",[e._v("The upgrade height as agreed upon by governance: "),o("strong",[e._v("2,902,000")])]),e._v(" "),o("li",[e._v("You may obtain the canonical UTC timestamp of the exported block by any of the following methods:\n"),o("ul",[o("li",[e._v("Block explorer (e.g. "),o("a",{attrs:{href:"https://hubble.figment.io/cosmos/chains/cosmoshub-2/blocks/2902000?format=json&kind=block",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hubble"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Through manually querying an RPC node (e.g. "),o("code",[e._v("/block?height=2902000")]),e._v(")")]),e._v(" "),o("li",[e._v("Through manually querying a Gaia REST client (e.g. "),o("code",[e._v("/blocks/2902000")]),e._v(")")])])])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Verify you are currently running the correct version (v0.34.6+) of the "),o("em",[e._v("Cosmos SDK")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB2ZXJzaW9uIC0tbG9uZwpjb3Ntb3Mtc2RrOiAwLjM0LjYKZ2l0IGNvbW1pdDogODAyMzRiYWY5MWExNWRkOWE3ZGY4ZGNhMzg2NzdiNjZiOGQxNDhjMQp2ZW5kb3IgaGFzaDogZjYwMTc2NjcyMjcwYzA5NDU1YzAxZTlkODgwMDc5YmEzNjEzMGRmNGY1Y2Q4OWRmNThiNjcwMWY1MGIxM2FhZApidWlsZCB0YWdzOiBuZXRnbyBsZWRnZXIKZ28gdmVyc2lvbiBnbzEuMTIuMiBsaW51eC9hbWQ2NAo="}})],1),e._v(" "),o("li",[o("p",[e._v("Export existing state from "),o("code",[e._v("cosmoshub-2")]),e._v(":")]),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(": It is recommended for validators and operators to take a full data snapshot at the export\nheight before proceeding in case the upgrade does not go as planned or if not enough voting power\ncomes online in a sufficient and agreed upon amount of time. In such a case, the chain will fallback\nto continue operating "),o("code",[e._v("cosmoshub-2")]),e._v(". See "),o("a",{attrs:{href:"#recovery"}},[e._v("Recovery")]),e._v(" for details on how to proceed.")]),e._v(" "),o("p",[e._v("Before exporting state via the following command, the "),o("code",[e._v("gaiad")]),e._v(" binary must be stopped!")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0tZm9yLXplcm8taGVpZ2h0IC0taGVpZ2h0PTI5MDIwMDAgJmd0OyBjb3Ntb3NodWJfMl9nZW5lc2lzX2V4cG9ydC5qc29uCg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Verify the SHA256 of the (sorted) exported genesis file:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBjb3Ntb3NodWJfMl9nZW5lc2lzX2V4cG9ydC5qc29uIHwgc2hhc3VtIC1hIDI1NgpbUExBQ0VIT0xERVJdICBjb3Ntb3NodWJfMl9nZW5lc2lzX2V4cG9ydC5qc29uCg=="}})],1),e._v(" "),o("li",[o("p",[e._v("At this point you now have a valid exported genesis state! All further steps now require\nv2.0.3 of "),o("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(": Go "),o("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.13+"),o("OutboundLink")],1),e._v(" is required!")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS5naXQgJmFtcDsmYW1wOyBjZCBnYWlhICZhbXA7JmFtcDsgZ2l0IGNoZWNrb3V0IHYyLjAuMzsgbWFrZSBpbnN0YWxsCg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Verify you are currently running the correct version (v2.0.3) of the "),o("em",[e._v("Gaia")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB2ZXJzaW9uIC0tbG9uZwpuYW1lOiBnYWlhCnNlcnZlcl9uYW1lOiBnYWlhZApjbGllbnRfbmFtZTogZ2FpYWNsaQp2ZXJzaW9uOiAyLjAuMwpjb21taXQ6IDJmNjc4M2UyOThmMjVmZjRlMTJjYjg0NTQ5Nzc3MDUzYWI4ODc0OWEKYnVpbGRfdGFnczogbmV0Z28sbGVkZ2VyCmdvOiBnbyB2ZXJzaW9uIGdvMS4xMy4zIGRhcndpbi9hbWQ2NAo="}})],1),e._v(" "),o("li",[o("p",[e._v("Migrate exported state from the current v0.34.6+ version to the new v2.0.3 version:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgbWlncmF0ZSB2MC4zNiBjb3Ntb3NodWJfMl9nZW5lc2lzX2V4cG9ydC5qc29uIC0tY2hhaW4taWQ9Y29zbW9zaHViLTMgLS1nZW5lc2lzLXRpbWU9W1BMQUNFSE9MREVSXSZndDsgZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(": The "),o("code",[e._v("migrate")]),e._v(" command takes an input genesis state and migrates it to a targeted version.\nBoth v0.36 and v0.37 are compatible as far as state structure is concerned.")]),e._v(" "),o("p",[e._v("Genesis time should be computed relative to the blocktime of "),o("code",[e._v("2,902,000")]),e._v(". The genesis time\nshall be the blocktime of "),o("code",[e._v("2,902,000")]),e._v(" + "),o("code",[e._v("60")]),e._v(" minutes with the subseconds truncated.")]),e._v(" "),o("p",[e._v("An example shell command(tested on OS X Mojave) to compute this values is:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBodHRwczovL3N0YXJnYXRlLmNvc21vcy5uZXR3b3JrOjI2NjU3L2Jsb2NrXD9oZWlnaHRcPTI5MDIwMDAgfCBqcSAtciAnLnJlc3VsdFsmcXVvdDtibG9ja19tZXRhJnF1b3Q7XVsmcXVvdDtoZWFkZXImcXVvdDtdWyZxdW90O3RpbWUmcXVvdDtdJ3x4YXJncyAtMCBkYXRlIC12ICs2ME0gIC1qICAtZiAmcXVvdDslWS0lbS0lZFQlSDolTTolUyZxdW90OyArJnF1b3Q7JVktJW0tJWRUJUg6JU06JVNaJnF1b3Q7Cg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Now we must update all parameters that have been agreed upon through governance. There is only a\nsingle parameter, "),o("code",[e._v("max_validators")]),e._v(", that we're upgrading based on "),o("a",{attrs:{href:"https://www.mintscan.io/proposals/10",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposal 10"),o("OutboundLink")],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2F0IGdlbmVzaXMuanNvbiB8IGpxICcuYXBwX3N0YXRlWyZxdW90O3N0YWtpbmcmcXVvdDtdWyZxdW90O3BhcmFtcyZxdW90O11bJnF1b3Q7bWF4X3ZhbGlkYXRvcnMmcXVvdDtdPTEyNScgJmd0OyB0bXBfZ2VuZXNpcy5qc29uICZhbXA7JmFtcDsgbXYgdG1wX2dlbmVzaXMuanNvbiBnZW5lc2lzLmpzb24K"}})],1),e._v(" "),o("li",[o("p",[e._v("Verify the SHA256 of the final genesis JSON:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBnZW5lc2lzLmpzb24gfCBzaGFzdW0gLWEgMjU2CltQTEFDRUhPTERFUl0gIGdlbmVzaXMuanNvbgo="}})],1),e._v(" "),o("li",[o("p",[e._v("Reset state:")]),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(": Be sure you have a complete backed up state of your node before proceeding with this step.\nSee "),o("a",{attrs:{href:"#recovery"}},[e._v("Recovery")]),e._v(" for details on how to proceed.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdW5zYWZlLXJlc2V0LWFsbAo="}})],1),e._v(" "),o("li",[o("p",[e._v("Move the new "),o("code",[e._v("genesis.json")]),e._v(" to your "),o("code",[e._v(".gaia/config/")]),e._v(" directory")])]),e._v(" "),o("li",[o("p",[e._v("Replace the "),o("code",[e._v("db_backend")]),e._v(" on "),o("code",[e._v(".gaia/config/config.toml")]),e._v(" to:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"ZGJfYmFja2VuZCA9ICZxdW90O2dvbGV2ZWxkYiZxdW90Owo="}})],1),e._v(" "),o("li",[o("p",[e._v("Note, if you have any application configuration in "),o("code",[e._v("gaiad.toml")]),e._v(", that file has now been renamed to "),o("code",[e._v("app.toml")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXYgLmdhaWEvY29uZmlnL2dhaWFkLnRvbWwgLmdhaWEvY29uZmlnL2FwcC50b21sCg=="}})],1)]),e._v(" "),o("h2",{attrs:{id:"notes-for-service-providers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notes-for-service-providers"}},[e._v("#")]),e._v(" Notes for Service Providers")]),e._v(" "),o("ol",[o("li",[e._v("The transition from "),o("code",[e._v("cosmoshub-2")]),e._v(" to "),o("code",[e._v("cosmoshub-3")]),e._v(" contains an unusual amount of API breakage.\nAfter this upgrade will maintain the CosmosSDK API stability guarantee to avoid breaking APIs for at\nleast 6 months and hopefully long.")]),e._v(" "),o("li",[e._v("Anyone running signing infrastructure(wallets and exchanges) should be conscious that the "),o("code",[e._v("type:")]),e._v("\nfield on "),o("code",[e._v("StdTx")]),e._v(" will have changed from "),o("code",[e._v('"type":"auth/StdTx","value":...')]),e._v(" to  "),o("code",[e._v('"type":"cosmos-sdk/StdTx","value":...')])]),e._v(" "),o("li",[e._v("As mentioned in the notes and SDK CHANGELOG, many queries to cosmos cli are wrapped with "),o("code",[e._v("height")]),e._v(" fields now.")]),e._v(" "),o("li",[e._v("We highly recommend standing up a "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/master/docs/deploy-testnet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet"),o("OutboundLink")],1),e._v("\nwith the "),o("code",[e._v("gaia-2.0")]),e._v(" release or joining the gaia-13006 testnet. More info for joining the testnet can be\nfound in the "),o("a",{attrs:{href:"https://riot.im/app/#/room/#cosmos-validators:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("riot validator room"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("We expect that developers with iOS or Android based apps may have to notify their users of downtime\nand ship an upgrade for cosmoshub-3 compatibility unless they have some kind of switch they can throw\nfor the new tx formats. Server side applications should experience briefer service interruptions and\nbe able to just spin up new nodes and migrate to the new apis.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);