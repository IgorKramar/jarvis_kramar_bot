const express = require('express');

const messageController = require("../controllers/message.controller.js");

const router = express.Router();

router
    .route('/new-message')
    .post(messageController.processIncomingMessage)


module.exports = router;