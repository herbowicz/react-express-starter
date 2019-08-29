const jwt = require("jsonwebtoken");

var data = {
  id: 10
};

//jwt.sign() takes the object and signs it, it creates the hash and returns the token value.
var token = jwt.sign(data, "my-secret-123");

//jwt.verify() does the opposite, it takes that token and the secret to ensure data wasn't manipulated.
var decoded = jwt.verify(token, "my-secret-123");

console.log("jwt token", token, " decoded:", decoded);
