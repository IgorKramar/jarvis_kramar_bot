const catchAsync = require('../utils/catchAsync.js');

const messageService = require('../services/message.service.js');

const processIncomingMessage = catchAsync(async (req, res) => {
  const { message } = req.body;
  if (!message) {
    res.end();
  }
  messageService.processIncomingMessage(message);
});

module.exports = {
  processIncomingMessage
}