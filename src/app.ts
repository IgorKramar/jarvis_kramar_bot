import express, { Express } from 'express';
import { HttpStatusCode } from 'axios';

import router from './routes';

import ApiError from './utils/ApiError';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/', router);

app.use((req, res, next) => {
    next(new ApiError(HttpStatusCode.NotFound, 'Not found'));
});

export default app;