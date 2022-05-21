const { verify } = require("jsonwebtoken");
const fs = require("fs");

module.exports = async function (token) {
  const cert = fs.readFileSync("./publickey.pem"); // get public key
  try {
    const decoded = verify(token, cert);
    return { payload: decoded }
  } catch(error) {
    return {
        error
    }
  }
};
