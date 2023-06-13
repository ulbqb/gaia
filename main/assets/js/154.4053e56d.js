(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{506:function(e,a,s){"use strict";s.r(a);var t=s(1),i=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"gaia-fees-and-fees-checks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gaia-fees-and-fees-checks"}},[e._v("#")]),e._v(" Gaia Fees and Fees Checks")]),e._v(" "),s("h2",{attrs:{id:"fee-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fee-parameters"}},[e._v("#")]),e._v(" Fee Parameters")]),e._v(" "),s("p",[e._v("The CosmosHub allows managing fees using 3 parameters:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("setting global fees ("),s("code",[e._v("MinimumGasPricesParam")]),e._v(")\nGlobal fees are defined at the network level by setting "),s("code",[e._v("MinimumGasPricesParam")]),e._v(", via "),s("a",{attrs:{href:"https://hub.cosmos.network/main/governance/proposals/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gov Proposals"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("code",[e._v("minimum-gas-prices")]),e._v("\nThis parameter is part of the node configuration, it can be set in the "),s("code",[e._v("config/app.toml")]),e._v(" configuration file.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("bypass-min-fee-msg-types")]),e._v("\nThis parameter is part of the node configuration, it can be set in the "),s("code",[e._v("config/app.toml")]),e._v(" configuration file.\nThis represents a list of message types that will be excluded from paying any fees for inclusion in a block.")])])]),e._v(" "),s("p",[e._v("Both global fees ("),s("code",[e._v("MinimumGasPricesParam")]),e._v(") and "),s("code",[e._v("minimum-gas-prices")]),e._v(" represent a list of coins, each denoted by an amount and domination as defined by "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/82ce891aa67f635f3b324b7a52386d5405c5abd0/types/dec_coin.go#L158",target:"_blank",rel:"noopener noreferrer"}},[e._v("sdk.DecCoins"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),s("h2",{attrs:{id:"global-fees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-fees"}},[e._v("#")]),e._v(" Global Fees")]),e._v(" "),s("p",[e._v("Global fees consist of a list of "),s("code",[e._v("sdk.DecCoins")]),e._v(" e.g., "),s("code",[e._v("[1uatom, 2stake]")]),e._v(".\nEvery transaction must pay per unit of gas "),s("strong",[e._v("at least")]),e._v(" one of the amounts stated in this list in the corresponding denomination (denom). By this notion, global fees allow a network to impose a minimum transaction fee.")]),e._v(" "),s("p",[e._v("The paid fees must be paid in at least one denom from the global fees list and the corresponding amount per unit of gas must be greater than or equal to the corresponding amount in the global fees list.")]),e._v(" "),s("p",[e._v("A global fees list must meet the following properties:")]),e._v(" "),s("ul",[s("li",[e._v("fees have to be alphabetically sorted by denom;")]),e._v(" "),s("li",[e._v("fees must have non-negative amount, with a valid and unique denom (i.e. no duplicate denoms are allowed).")])]),e._v(" "),s("p",[e._v("There are "),s("strong",[e._v("two exceptions")]),e._v(" from the global fees rules that allow zero fee transactions:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Transactions that contain only "),s("a",{attrs:{href:"#bypass-fees-message-types"}},[e._v("message types that can bypass the minimum fee")]),e._v(" may have zero fees. We refer to this as "),s("em",[e._v("bypass transactions")]),e._v(". Node operators can choose to define these message types (for each node) via the "),s("code",[e._v("bypass-fee-message-types")]),e._v(" configuration parameter.")])]),e._v(" "),s("li",[s("p",[e._v("One of the entries in the global fees list has a zero amount, e.g., "),s("code",[e._v("0uatom")]),e._v(", and the corresponding denom, e.g., "),s("code",[e._v("uatom")]),e._v(", is not present in "),s("code",[e._v("minimum-gas-prices")]),e._v(".")])])]),e._v(" "),s("p",[e._v("Additionally, node operators may set additional minimum gas prices which can be larger than the "),s("em",[e._v("global")]),e._v(" minimum gas prices defined on chain.")]),e._v(" "),s("h3",{attrs:{id:"minimum-gas-prices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimum-gas-prices"}},[e._v("#")]),e._v(" minimum-gas-prices")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("minimum-gas-prices")]),e._v(" config parameter allows node operators to impose additional requirements for minimum fees. The following rules apply:")]),e._v(" "),s("ul",[s("li",[e._v("The denoms in "),s("code",[e._v("min-gas-prices")]),e._v(" that are not present in the global fees list are ignored.")]),e._v(" "),s("li",[e._v("The amounts in "),s("code",[e._v("min-gas-prices")]),e._v(" are considered only if they are greater than the amounts for the corresponding denoms in the global fees list.")])]),e._v(" "),s("h2",{attrs:{id:"bypass-fees-message-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bypass-fees-message-types"}},[e._v("#")]),e._v(" Bypass Fees Message Types")]),e._v(" "),s("p",[e._v("Bypass messages are messages that are exempt from paying fees. The above global fees and "),s("code",[e._v("minimum-gas-prices")]),e._v(" checks do not apply for transactions that satisfy the following conditions:")]),e._v(" "),s("ul",[s("li",[e._v("Contains only bypass message types, i.e., bypass transactions.")]),e._v(" "),s("li",[e._v("The total gas used is less than or equal to "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v(". Note: the current "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v(" is set to "),s("code",[e._v("1,000,000")]),e._v(".")]),e._v(" "),s("li",[e._v("In case of non-zero transaction fees, the denom has to be a subset of denoms defined in the global fees list.")])]),e._v(" "),s("p",[e._v("Node operators can configure "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" in "),s("code",[e._v("config/app.toml")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Nodes created using Gaiad "),s("code",[e._v("v7.0.2")]),e._v(" - "),s("code",[e._v("v10.0.x")]),e._v(" use "),s("code",[e._v('["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.channel.v1.MsgAcknowledgement","/ibc.applications.transfer.v1.MsgTransfer"]')]),e._v(" as defaults.")]),e._v(" "),s("li",[e._v("Nodes created using Gaiad "),s("code",[e._v("v11.0.x")]),e._v(" or later use "),s("code",[e._v('["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.channel.v1.MsgAcknowledgement","/ibc.applications.transfer.v1.MsgTransfer", "/ibc.core.channel.v1.MsgTimeout", "/ibc.core.channel.v1.MsgTimeoutOnClose"]')]),e._v(" as defaults.")]),e._v(" "),s("li",[e._v("Node Nodes with "),s("code",[e._v("bypass-min-fee-msg-types = []")]),e._v(" or missing this field in "),s("code",[e._v("app.toml")]),e._v(" also use default bypass message types.")]),e._v(" "),s("li",[e._v("Nodes created using Gaiad "),s("code",[e._v("v7.0.1")]),e._v(" and "),s("code",[e._v("v7.0.0")]),e._v(" do not have "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" configured in "),s("code",[e._v("config/app.toml")]),e._v(" - they are also using same default values as in "),s("code",[e._v("v7.0.2")]),e._v(". The "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" config option can be added to "),s("code",[e._v("config/app.toml")]),e._v(" before the "),s("code",[e._v("[telemetry]")]),e._v(" field.")])]),e._v(" "),s("p",[e._v("An example of "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" in "),s("code",[e._v("app.toml")]),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"CiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tIEdhaWEgQ29uZmlndXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMgYnlwYXNzLW1pbi1mZWUtbXNnLXR5cGVzIGRlZmluZXMgY3VzdG9tIG1lc3NhZ2UgdHlwZXMgdGhlIG9wZXJhdG9yIG1heSBzZXQgdGhhdAojIHdpbGwgYnlwYXNzIG1pbmltdW0gZmVlIGNoZWNrcyBkdXJpbmcgQ2hlY2tUeC4KIwojIEV4YW1wbGU6CiMgWyZxdW90Oy9pYmMuY29yZS5jaGFubmVsLnYxLk1zZ1JlY3ZQYWNrZXQmcXVvdDssICZxdW90Oy9pYmMuY29yZS5jaGFubmVsLnYxLk1zZ0Fja25vd2xlZGdlbWVudCZxdW90OywgLi4uXQpieXBhc3MtbWluLWZlZS1tc2ctdHlwZXMgPSBbJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnUmVjdlBhY2tldCZxdW90OywgJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnQWNrbm93bGVkZ2VtZW50JnF1b3Q7LCZxdW90Oy9pYmMuYXBwbGljYXRpb25zLnRyYW5zZmVyLnYxLk1zZ1RyYW5zZmVyJnF1b3Q7LCAmcXVvdDsvaWJjLmNvcmUuY2hhbm5lbC52MS5Nc2dUaW1lb3V0JnF1b3Q7LCAmcXVvdDsvaWJjLmNvcmUuY2hhbm5lbC52MS5Nc2dUaW1lb3V0T25DbG9zZSZxdW90O10K"}}),e._v(" "),s("h2",{attrs:{id:"fee-antehandler-behaviour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fee-antehandler-behaviour"}},[e._v("#")]),e._v(" Fee AnteHandler Behaviour")]),e._v(" "),s("p",[e._v("The denoms in the global fees list and the "),s("code",[e._v("minimum-gas-prices")]),e._v(" param are merged and de-duplicated while keeping the higher amounts. Denoms that are only in the "),s("code",[e._v("minimum-gas-prices")]),e._v(" param are discarded.")]),e._v(" "),s("p",[e._v("If the denoms of the transaction fees are a subset of the merged fees and at least one of the amounts of the transaction fees is greater than or equal to the corresponding required fees amount, the transaction can pass the fee check, otherwise an error will occur.")]),e._v(" "),s("h2",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("p",[e._v("CLI queries can be used to retrieve the global fee value:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z2FpYWQgcSBnbG9iYWxmZWUgbWluaW11bS1nYXMtcHJpY2VzCiMgb3IKZ2FpYWQgcSBwYXJhbXMgc3Vic3BhY2UgZ2xvYmFsZmVlIE1pbmltdW1HYXNQcmljZXNQYXJhbQo="}}),e._v(" "),s("p",[e._v("If the global fee is not set, the query returns an empty global fees list: "),s("code",[e._v("minimum_gas_prices: []")]),e._v(". In this case the Cosmos Hub will use "),s("code",[e._v("0uatom")]),e._v(" as global fee in this case (the default fee denom).")]),e._v(" "),s("h2",{attrs:{id:"setting-up-global-fees-via-gov-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-global-fees-via-gov-proposals"}},[e._v("#")]),e._v(" Setting Up Global Fees via Gov Proposals")]),e._v(" "),s("p",[e._v("An example of setting up a global fee by a gov proposals is shown below.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z292IHN1Ym1pdC1wcm9wb3NhbCBwYXJhbS1jaGFuZ2UgcHJvcG9zYWwuanNvbgo="}}),e._v(" "),s("p",[e._v("A "),s("code",[e._v("proposal.json")]),e._v(" example:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtHbG9iYWwgZmVlcyBQYXJhbSBDaGFuZ2UmcXVvdDssCiAgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDs6ICZxdW90O1VwZGF0ZSBnbG9iYWwgZmVlcyZxdW90OywKICAmcXVvdDtjaGFuZ2VzJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O3N1YnNwYWNlJnF1b3Q7OiAmcXVvdDtnbG9iYWxmZWUmcXVvdDssCiAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7TWluaW11bUdhc1ByaWNlc1BhcmFtJnF1b3Q7LAogICAgICAmcXVvdDt2YWx1ZSZxdW90OzogW3smcXVvdDtkZW5vbSZxdW90OzomcXVvdDtzdGFrZSZxdW90OywgJnF1b3Q7YW1vdW50JnF1b3Q7OiZxdW90OzAuMDAyJnF1b3Q7fSwgeyZxdW90O2Rlbm9tJnF1b3Q7OiZxdW90O3VhdG9tJnF1b3Q7LCAmcXVvdDthbW91bnQmcXVvdDs6ICZxdW90OzAuMDAxJnF1b3Q7fV0KICAgIH0KICBdLAogICZxdW90O2RlcG9zaXQmcXVvdDs6ICZxdW90OzEwMDBzdGFrZSZxdW90Owp9Cg=="}}),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(' in the above "value" field, coins must sorted alphabetically by denom.')]),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("p",[e._v("Here are a few examples to clarify the relationship between global fees, minimum-gas-prices and transaction fees.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Transactions can include zero-coin fees. However, these fees are removed from the transaction fees during the fee "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/e716e4103e934344aa7be6dc9b5c453bdec5f225/client/tx/factory.go#L144",target:"_blank",rel:"noopener noreferrer"}},[e._v("parsing"),s("OutboundLink")],1),e._v(" / "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/e716e4103e934344aa7be6dc9b5c453bdec5f225/types/dec_coin.go#L172",target:"_blank",rel:"noopener noreferrer"}},[e._v("santitizing"),s("OutboundLink")],1),e._v(" before reaching the fee AnteHandler.\nThis means "),s("code",[e._v('paidfee = "1uatom, 0stake"')]),e._v(" and "),s("code",[e._v('paidfee = "1uatom"')]),e._v(" are equivalent, and similarly, "),s("code",[e._v('paidfee = "0uatom"')]),e._v(" is equivalent to "),s("code",[e._v('paidfee = ""')]),e._v(".\nIn the following examples, zero-coin fees are removed from the transaction fees.")]),e._v(" "),s("h3",{attrs:{id:"case-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-1"}},[e._v("#")]),e._v(" Case 1")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[], minimum-gas-prices=0.1uatom, gas=2000000.")]),e._v(" "),s("p",[e._v("Note that this is the same case as globalfee=0uatom, minimum-gas-prices=0.1uatom, gas=2000000.")]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom, 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-2"}},[e._v("#")]),e._v(" Case 2")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[], minimum-gas-prices="", gas=2000000.')]),e._v(" "),s("p",[e._v('Note that this is the same case as globalfee=0uatom, minimum-gas-prices="", gas=2000000.')]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")])]),e._v(" "),s("h3",{attrs:{id:"case-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-3"}},[e._v("#")]),e._v(" Case 3")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.2uatom], minimum-gas-prices=0.1uatom, gas=2000000 (global fee is higher than min_as_price).")]),e._v(" "),s("p",[e._v('Note that this is the same case as globalfee=0.2uatom, minimum-gas-prices="", gas=2000000.')]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2uatom, 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-4"}},[e._v("#")]),e._v(" Case 4")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.1uatom], minimum-gas-prices=0.2uatom, gas=2000000 (global fee is lower than min_as_price).")]),e._v(" "),s("p",[e._v("Note that the required amount in globalfee is overwritten by the amount in minimum-gas-prices.")]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2uatom, 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v("paidfee = 0uatom, "),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-5"}},[e._v("#")]),e._v(" Case 5")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[0uatom, 1stake], minimum-gas-prices="", gas=200000.')]),e._v(" "),s("ul",[s("li",[e._v('paidfee ="2000000 * 0.5stake", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee ="", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee ="2000000 * 1uatom, 0.5stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee ="2000000 * 1stake", '),s("code",[e._v("pass")])])]),e._v(" "),s("h3",{attrs:{id:"case-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-6"}},[e._v("#")]),e._v(" Case 6")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.1uatom, 1stake], minimum-gas-prices=0.2uatom, gas=200000.")]),e._v(" "),s("p",[e._v("Note that the required amount of "),s("code",[e._v("uatom")]),e._v(" in globalfee is overwritten by the amount in minimum-gas-prices.")]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 1stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.5stake", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom, 2000000 * 1stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2atom, 2000000 * 0.5stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom, 2000000 * 0.5stake", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-7"}},[e._v("#")]),e._v(" Case 7")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[0.1uatom], minimum-gas-prices=[0.2uatom, 1stake], gas=200000, bypass-min-fee-msg-types = ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"]')]),e._v(" "),s("p",[e._v("Note that the required amount of "),s("code",[e._v("uatom")]),e._v(" in globalfee is overwritten by the amount in minimum-gas-prices.\nAlso, the "),s("code",[e._v("1stake")]),e._v(" in minimum-gas-prices is ignored.")]),e._v(" "),s("ul",[s("li",[e._v('msg withdraw-all-rewards with paidfee="", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('msg withdraw-all-rewards with paidfee="200000 * 0.05uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('msg withdraw-all-rewards with paidfee="200000 * 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")])]),e._v(" "),s("h3",{attrs:{id:"case-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-8"}},[e._v("#")]),e._v(" Case 8")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[1uatom], minimum-gas-prices="", gas=300000, bypass-min-fee-msg-types = ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"]')]),e._v(" "),s("ul",[s("li",[e._v('msg withdraw-all-rewards with paidfee="", '),s("code",[e._v("fail")]),e._v(" (gas limit exceeded for bypass transactions)")]),e._v(" "),s("li",[e._v('msg withdraw-all-rewards with paidfee="300000 * 0.5uatom", '),s("code",[e._v("fail")]),e._v(" (gas limit exceeded for bypass transactions, insufficient funds)")]),e._v(" "),s("li",[e._v('msg withdraw-all-rewards with paidfee="300000 * 1uatom", '),s("code",[e._v("pass")])])]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.cosmos.network/main/basics/gas-fees.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gas and Fees in Cosmos SDK"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);