(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{600:function(e,a,t){"use strict";t.r(a);var r=t(1),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"parameter-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-change"}},[e._v("#")]),e._v(" Parameter Change")]),e._v(" "),t("p",[e._v("This Cosmos Hub educational documentation aims to outline the "),t("a",{attrs:{href:"#params-wiki"}},[e._v("Hub's parameters")]),e._v(", describe their functions, and describe the potential implications of modifying each parameter. This documentation also aims to provide guidelines for creating and assessing parameter-change proposals.")]),e._v(" "),t("p",[e._v("Drafting and submitting a parameter-change governance proposal involves two kinds of risk: losing proposal deposit amounts and the potential to alter the function of the Cosmos Hub network in an undesirable way.")]),e._v(" "),t("h2",{attrs:{id:"what-parameters-can-be-changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-parameters-can-be-changed"}},[e._v("#")]),e._v(" What parameters can be changed?")]),e._v(" "),t("p",[e._v("The complete parameters of the Cosmos Hub are split up into different modules, each of which has its own set of parameters. Any of them can be updated with a Param Change Proposal. If you are technically inclined, this is the full "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of modules"),t("OutboundLink")],1),e._v(" in the Cosmos SDK. The Cosmos Hub is built using the Cosmos SDK, but not all available modules are in use on the Hub.")]),e._v(" "),t("p",[e._v("There are currently 8 modules active in the Cosmos Hub with parameters that may be altered via governance proposal. New modules may be introduced in the future.")]),e._v(" "),t("ol",[t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Auth.html"}},[e._v("auth")]),e._v(" - Authentication of accounts and transactions")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Bank.html"}},[e._v("bank")]),e._v(" - Token transfer functionalities")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Governance.html"}},[e._v("gov")]),e._v(" - On-chain governance proposals and voting")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Staking.html"}},[e._v("staking")]),e._v(" - Proof-of-stake layer")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Slashing.html"}},[e._v("slashing")]),e._v(" - Validator punishment mechanisms")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Distribution.html"}},[e._v("distribution")]),e._v(" - Fee distribution and staking token provision distribution")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Crisis.html"}},[e._v("crisis")]),e._v(" - Halting the blockchain under certain circumstances (ie. if an invariant is broken)")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/proposal-types/params-change/Mint.html"}},[e._v("mint")]),e._v(" - Creation of new units of staking token\n")],1)]),e._v(" "),t("h2",{attrs:{id:"what-are-the-current-parameter-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-current-parameter-values"}},[e._v("#")]),e._v(" What are the current parameter values?")]),e._v(" "),t("p",[e._v("There are ways to query the current settings for each module's parameter(s). Some can be queried with the command line program "),t("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[t("code",[e._v("gaiad")])]),e._v(".")],1),e._v(" "),t("p",[e._v("You can begin by using the command "),t("code",[e._v("gaia q [module] -h")]),e._v(" to get help about the subcommands for the module you want to query. For example, "),t("code",[e._v("gaiad q staking params --chain-id <chain-id> --node <node-id>")]),e._v(" returns the settings of relevant parameters:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ym9uZF9kZW5vbTogdWF0b20KaGlzdG9yaWNhbF9lbnRyaWVzOiAxMDAwMAptYXhfZW50cmllczogNwptYXhfdmFsaWRhdG9yczogMTgwCnVuYm9uZGluZ190aW1lOiAxODE0NDAwcwo="}}),e._v(" "),t("p",[e._v("If a parameter-change proposal is successful, the change takes effect immediately upon completion of the voting period.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" You cannot currently query the "),t("code",[e._v("bank")]),e._v(" module's parameter, which is "),t("code",[e._v("sendenabled")]),e._v(". You also cannot query the "),t("code",[e._v("crisis")]),e._v(" module's parameters.")]),e._v(" "),t("h2",{attrs:{id:"why-create-a-parameter-change-proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-create-a-parameter-change-proposal"}},[e._v("#")]),e._v(" Why create a parameter change proposal?")]),e._v(" "),t("p",[e._v("Parameters are what govern many aspects of the chain's behaviour. As circumstances and attitudes change, sometimes you might want to change a parameter to bring the chain's behaviour in line with community opinion. For example, the Cosmos Hub launched with 100 active validators and there have been 4 proposals to date that have increased the "),t("code",[e._v("MaxValidators")]),e._v(" parameter. At the time of writing, the active set contains 180 validators.")]),e._v(" "),t("p",[e._v("The Cosmos Hub has been viewed as a slow-moving, highly secure chain and that is reflected in some of its other parameters, such as a 21 day unbonding period and 14 day voting period. These are quite long compared to other chains in the Cosmos Ecosystem")]),e._v(" "),t("h2",{attrs:{id:"risks-in-parameter-change-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#risks-in-parameter-change-proposals"}},[e._v("#")]),e._v(" Risks in parameter change proposals")]),e._v(" "),t("p",[e._v("Because parameters dictate some of the ways in which the chain operates, changing them can have an impact beyond what is immediately obvious.")]),e._v(" "),t("p",[e._v("For example, reducing the unbonding period might seem like the only effect is in how quickly delegators can liquidate their assets. It might also have a much greater impact on the overall security of the network that would be hard to realize at first glance.")]),e._v(" "),t("p",[e._v("This is one of the reasons that having a thorough discussion before going on-chain is so important - talking through the impacts of a proposal is a great way to avoid unintended effects.")]),e._v(" "),t("h2",{attrs:{id:"credits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),t("p",[e._v("This documentation was originally created by Gavin Birch ("),t("a",{attrs:{href:"https://figment.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figment Networks"),t("OutboundLink")],1),e._v("). Its development was supported by funding approved on January 29, 2020 by the Cosmos Hub via Community Spend "),t("a",{attrs:{href:"https://cosmoshub-3.bigdipper.live/proposals/23",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 23"),t("OutboundLink")],1),e._v(" ("),t("a",{attrs:{href:"https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY",target:"_blank",rel:"noopener noreferrer"}},[e._v("full Proposal PDF here"),t("OutboundLink")],1),e._v("). In late 2021 and early 2022 significant updates were made by "),t("a",{attrs:{href:"https://hypha.coop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hypha Worker Co-op"),t("OutboundLink")],1),e._v(", especially @dcwalk and @lexaMichaelides.  🙏")]),e._v(" "),t("p",[t("strong",[e._v("Special thanks")]),e._v(" to the following for providing credible information:")]),e._v(" "),t("ul",[t("li",[e._v("Aleks (All in Bits; Fission Labs) for answering countless questions about these parameters")]),e._v(" "),t("li",[e._v("Alessio (All in Bits) for explaining how "),t("a",{attrs:{href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Auth.html#4-sigverifycosted25519",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("SigVerifyCostED25519")]),t("OutboundLink")],1),e._v(" & "),t("a",{attrs:{href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Auth.html#5-sigverifycostsecp256k1",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("SigVerifyCostSecp256k1")]),t("OutboundLink")],1),e._v(" work, and detailed answers to my many questions")]),e._v(" "),t("li",[e._v("Vidor for volunteering to explain "),t("a",{attrs:{href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Crisis.html#1-constantfee",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("ConstantFee")]),t("OutboundLink")],1),e._v(" and answering my many questions in detail")]),e._v(" "),t("li",[e._v("Hyung (B-Harvest) for volunteering how "),t("a",{attrs:{href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Mint.html#2-inflationratechange",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("InflationRateChange")]),t("OutboundLink")],1),e._v(" works")]),e._v(" "),t("li",[e._v("Joe (Chorus One) for explaining the security details involved with using full nodes for transactions")]),e._v(" "),t("li",[e._v("Sunny (All in Bits; Sikka) for volunteering an explanation of the purpose of "),t("a",{attrs:{href:"https://hub.cosmos.network/main/governance/proposal-types/params-change/Distribution.html#4-withdrawaddrenabled",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("withdrawaddrenabled")]),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=o.exports}}]);