const jwt = require("jsonwebtoken");

var data = {
  id: 10
};

//jwt.sign() takes the object and signs it, it creates the hash and returns the token value.
var token = jwt.sign(data, "my-secret-123");

//jwt.verify() does the opposite, it takes that token and the secret to ensure data wasn't manipulated.
try {
  var decoded = jwt.verify(token, "my-secret-123");
} catch (e) {
  //when invalid secret
  console.log("error", e);
}

console.log("jwt token", token, " decoded:", decoded);

//1. We need to send user authentication token post signup and login calls.
//2. Later client will send this token with the call to get data, and we will authenticate this token to see if user has the access.
