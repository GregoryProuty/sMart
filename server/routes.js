const express = require('express');
const routes = express();
const path = require('path');

routes.use(express.static(__dirname + '/../public'));
routes.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});


module.exports = routes;