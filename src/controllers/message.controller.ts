import messageService from "../services/message.service";

import catchAsync from "../utils/catchAsync";
import { TgMessage } from '../services/telegram/types';

const processIncomingMessage = catchAsync(async (req, res) => {
  const { message }: { message: TgMessage } = req.body;
  if (!message) {
    res.end();
  }
  messageService.processIncomingMessage(message);
});

export default {
  processIncomingMessage
}