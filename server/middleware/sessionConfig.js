const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'../config/config.env'});
const app = express();

COOKIESECRET = process.env.COOKIESECRET;

const sessionConfig = {
    name: 'userSession',
    secret: 'COOKIESECRET',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 3600000, // Time in milliseconds (1 hour)
        httpOnly: true,
    },
}

module.exports = sessionConfig;