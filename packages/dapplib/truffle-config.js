require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain umbrella half argue front slam'; 
let testAccounts = [
"0x7a0b2d390c8871e8bfb0da891e47baf41ba07dfa1409d6927c6bd234f1c44c45",
"0xe2059f262d093f14e67bce669fad3cec2e32062952518fcca6386eec02492378",
"0xbdccdeddd4ac880eb99b9d58d0009155a2bf20a85a412d44b836c887693716ea",
"0x56f2daaaf5ac2945855598da52fb4c292e6ae8619245ac95f04939cb881a0fce",
"0xc64589cf61f538785fb260d50886f6082a8215ea0bfc9198869ff3660c2a1828",
"0xec1bddbdc74b3b768beca8b99bf90ef352b3edd4b3e17fb17a2c41db44236f1a",
"0xb5866724e3b24f17b6e48c80180a1079b5a547e4a41c0223ef7db14859f24f7a",
"0x253ac3878fc40d54aa033cc7331e46969601f4b1a42f9cf603e910ac406c8b44",
"0x865f477ec81007bf1850a0c3c6d08dfd2a10c2071831820398fe8522e134c234",
"0xab69071c27cffd3d1bb97f4e1c36f4c65a8bd26d0492be251e55436f68b41ae7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

