const express = require('express');
const routes = express();

routes.use(express.static(__dirname + '/../public'));

module.exports = routes;