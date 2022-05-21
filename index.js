require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const signJwt = require('./sign-jwt');
const verifyjwt = require('./verify-jwt');

const app = express();

app.use(bodyParser.json())

app.post('/signjwt', async (req, res) => {
    let { body } = req;
    let response = await signJwt(body);
    res.send(response);
});

app.post('/verifyjwt', async (req, res) => {
    let { body: { jwtToken } = {} } = req;   
    let response = await verifyjwt(jwtToken);
    res.send(response);
});

app.listen(3000, () => {
    console.log('App listening at http://localhost:3000')
});
