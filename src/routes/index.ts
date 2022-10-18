import express from 'express';

import messageController from '../controllers/message.controller.js';

const router = express.Router();

router
    .route('/new-message')
    .post(messageController.processIncomingMessage)


export default router;