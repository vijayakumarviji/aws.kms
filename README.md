# AWS KMS JWT

Generate and Verify JWT token using AWS Key Management Service (Version 3)

## Installation

Use NPM to install dependency packages.

```bash
npm install
```

## Update AWS credentials

Update your AWS Access key, Secret access key, Region and KeyId in .env file

```python
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
AWS_REGION=YOUR_REGION
KEY_ID=YOUR_KEY_ID
```

## Update KMS Public key
Get your public key from AWS KMS and replace with **publickey.pem**

## Start server
```bash
npm start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)