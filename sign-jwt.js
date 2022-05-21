const { KMSClient, SignCommand } = require("@aws-sdk/client-kms");

let provider = new KMSClient({
  region: process.env.AWS_REGION,
});

module.exports = async function (payload = {}) {
  if (typeof payload == "object") {
    payload = JSON.stringify(payload);
  }
  const headers = {
    alg: "RS256",
    typ: "JWT",
  };
  const tokenParts = {
    header: Buffer.from(JSON.stringify(headers)).toString("base64url"),
    payload: Buffer.from(payload).toString("base64url"),
  };

  const message = Buffer.from(`${tokenParts.header}.${tokenParts.payload}`);

  let command = new SignCommand({
    KeyId: process.env.KEY_ID,
    Message: message,
    SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256",
  });

  let response = await provider.send(command);

  let messageSignature = Buffer.from(response.Signature).toString("base64url");
  let jwtToken = `${tokenParts.header}.${tokenParts.payload}.${messageSignature}`;

  return {
    jwtToken,
  };
};
