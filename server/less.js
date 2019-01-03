const express = require('express');
const { Nuxt } = require('nuxt');
const app = express();
let config = require('../nuxt.config.js');
config.dev = false;
const nuxt = new Nuxt(config);
app.use(nuxt.render);

const forward = require('expressjs-openwhisk')(app);

function main(request) {
  return forward(request);
}

exports.main = main;
