const { SHA256 } = require("crypto-js");

var message = "Secret message!!";
var hash = SHA256(message).toString();
console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);
