//**
// MAIN - main repository
// CRYPTO - CREATE PULL REQUEST
//  */
const crypto = require("crypto"); //ES6

function hashData(data){
    return crypto.createHash('sha256').update(data).digest('hex');
}

// const message = "Hello Equinim";

// const hashResult = hashData(message);

// console.log('Hash: ', hashResult);