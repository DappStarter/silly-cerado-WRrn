require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach razor sister clutch hundred light army gentle'; 
let testAccounts = [
"0xfa889a5159240076706bd6d48900fcf69676fcaae97d8607e84edf4e4de799a5",
"0x87e64222438e7f3158d4aa892d3cc9b989fe86280221b645f578099b037a95c0",
"0x7b765f85e04e0bf9d6bf6c9378b588dddca13fd5f3780a17cbdb543d1992d368",
"0x4063d4e5b8aead580404c9a9b25851e9ca2dc78885b58a89987b913f0b74b783",
"0x9c0972239d5b3381f96a7e0adf871713dc3b8489242064ddcbbac22c6e2d39f3",
"0x5ad9cb51eafa47fdf00a712256c5e34e4eeb12d1af63b188ec031a74af303551",
"0x30d87d830844a8ba33755acdd902cb850a98aab389fc4dc6e65e1ee9346639d6",
"0x29ce5e6131a0ed1c3ef336632bb8464f01ff76472f2c2e76fd47553f218c134b",
"0x0624c14828c135071626cf1a7abd369d90b63f9d48f22ad0db3b70a51a88f389",
"0xa33ad74da645c6b0c4c9fda8c36158b42bf893f17c2627b6ff94013b0618df27"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

