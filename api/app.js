const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
});

module.exports = app;