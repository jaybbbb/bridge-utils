const { Address } = require("ton");

const TonWeb = require("tonweb");

(async() => {
    const input = process.argv[2];

    // Decoding
    const addr = Address.parseFriendly(input);
    const hashPart = addr.address.hash.toString('hex');
    const workChain = addr.address.workChain; // workChain 0 만 취급

    console.log(`toAddress: 0x${hashPart}`);
})()
