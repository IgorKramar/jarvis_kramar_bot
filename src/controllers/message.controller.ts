import messageService from "../services/message.service";

import catchAsync from "../utils/catchAsync";

const processIncomingMessage = catchAsync(async (req, res) => {
  const { message } = req.body;
  if (!message) {
    res.end();
  }
  messageService.processIncomingMessage(message);
});

export default {
  processIncomingMessage
}