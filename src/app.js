const express = require('express');

const router = require('./routes');

const ApiError = require('./utils/ApiError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/', router);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;