(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{557:function(g,I,A){"use strict";A.r(I);var C=A(1),e=Object(C.a)({},(function(){var g=this,I=g.$createElement,A=g._self._c||I;return A("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[A("h1",{attrs:{id:"hd-wallets"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#hd-wallets"}},[g._v("#")]),g._v(" HD Wallets")]),g._v(" "),A("p",[g._v("Accounts in Cosmos are Hierarchical Deterministic (HD) Wallets. Originally specified in Bitcoin's "),A("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP32"),A("OutboundLink")],1),g._v(", HD wallets are a special kind of wallet that let users derive any number of accounts from a single seed. To understand what that means, let us first define some terminology:")]),g._v(" "),A("ul",[A("li",[A("strong",[g._v("Wallet")]),g._v(": Set of accounts obtained from a given seed.")]),g._v(" "),A("li",[A("strong",[g._v("Account")]),g._v(": A pair of public key/private key.")]),g._v(" "),A("li",[A("strong",[g._v("Private Key")]),g._v(": A private key is a secret piece of information used to sign messages. In the blockchain context, a private key identifies the owner of an account. The private key of a user should never be revealed to others.")]),g._v(" "),A("li",[A("strong",[g._v("Public Key")]),g._v(": A public key is a piece of information obtained by applying a one-way mathematical function on a private key. From it, an address can be derived. A private key cannot be found from a public key.")]),g._v(" "),A("li",[A("strong",[g._v("Address")]),g._v(": An address is a public string with a human-readable prefix that identifies an account. It is obtained by applying mathematical transformations to a public key.")]),g._v(" "),A("li",[A("strong",[g._v("Digital Signature")]),g._v(": A digital signature is a piece of cryptographic information that proves the owner of a given private key approved of a given message without revealing the private key.")]),g._v(" "),A("li",[A("strong",[g._v("Seed")]),g._v(": Same as Mnemonic.")]),g._v(" "),A("li",[A("strong",[g._v("Mnemonic")]),g._v(": A mnemonic is a sequence of words that is used as seed to derive private keys. The mnemonic is at the core of each wallet. NEVER LOSE YOUR MNEMONIC. WRITE IT DOWN ON A PIECE OF PAPER AND STORE IT SOMEWHERE SAFE. IF YOU LOSE IT, THERE IS NO WAY TO RETRIEVE IT. IF SOMEONE GAINS ACCESS TO IT, THEY GAIN ACCESS TO ALL THE ASSOCIATED ACCOUNTS.")])]),g._v(" "),A("p",[g._v("At the core of a HD wallet, there is a seed. From this seed, users can deterministically generate accounts. To generate an account from a seed, one-way mathematical transformations are applied. To decide which account to generate, the user specifies a "),A("code",[g._v("path")]),g._v(", generally an "),A("code",[g._v("integer")]),g._v(" ("),A("code",[g._v("0")]),g._v(", "),A("code",[g._v("1")]),g._v(", "),A("code",[g._v("2")]),g._v(", ...).")]),g._v(" "),A("p",[g._v("By specifying "),A("code",[g._v("path")]),g._v(" to be "),A("code",[g._v("0")]),g._v(" for example, the Wallet will generate "),A("code",[g._v("Private Key 0")]),g._v(" from the seed. Then, "),A("code",[g._v("Public Key 0")]),g._v(" can be generated from "),A("code",[g._v("Private Key 0")]),g._v(". Finally, "),A("code",[g._v("Address 0")]),g._v(" can be generated from "),A("code",[g._v("Public Key 0")]),g._v(". All these steps are one way only, meaning the "),A("code",[g._v("Public Key")]),g._v(" cannot be found from the "),A("code",[g._v("Address")]),g._v(", the "),A("code",[g._v("Private Key")]),g._v(" cannot be found from the "),A("code",[g._v("Public Key")]),g._v(", ...")]),g._v(" "),A("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICBBY2NvdW50IDAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCAxICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgMgoKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgIHwKfCAgICBBZGRyZXNzIDAgICAgIHwgICAgICAgICAgICAgIHwgICAgQWRkcmVzcyAxICAgICB8ICAgICAgICAgICAgICAgfCAgICBBZGRyZXNzIDIgICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHVibGljIGtleSAwICAgIHwgICAgICAgICAgICAgIHwgIFB1YmxpYyBrZXkgMSAgICB8ICAgICAgICAgICAgICAgfCAgUHVibGljIGtleSAyICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHJpdmF0ZSBrZXkgMCAgIHwgICAgICAgICAgICAgIHwgIFByaXZhdGUga2V5IDEgICB8ICAgICAgICAgICAgICAgfCAgUHJpdmF0ZSBrZXkgMiAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tKy0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE1uZW1vbmljIChTZWVkKSAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0rCg=="}}),g._v(" "),A("p",[g._v("The process of derivating accounts from the seed is deterministic. This means that given the same path, the derived private key will always be the same.")]),g._v(" "),A("p",[g._v("The funds stored in an account are controlled by the private key. This private key is generated using a one-way function from the mnemonic. If you lose the private key, you can retrieve it using the mnemonic. However, if you lose the mnemonic, you will lose access to all the derived private keys. Likewise, if someone gains access to your mnemonic, they gain access to all the associated accounts.")]),g._v(" "),A("div",{staticClass:"custom-block danger"},[A("p",[A("strong",[g._v("Do not lose or share your 24 words with anyone. To prevent theft or loss of funds, it is best to keep multiple copies of your mnemonic stored in safe, secure places. If someone is able to gain access to your mnemonic, they will fully control the accounts associated with them.")])])])],1)}),[],!1,null,null,null);I.default=e.exports}}]);