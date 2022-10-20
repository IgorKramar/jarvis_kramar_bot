import TelegramAPI from './telegramAPI.service';

import logger from '../config/logger';
import { TgMessage } from '../types';

const processIncomingMessage = async (telegramMessage: TgMessage) => {
  try {
    await TelegramAPI.greeting(telegramMessage.chat?.id, telegramMessage.from);
    logger.info('Message posted.');
  } catch (error) {
    logger.error("Error: ", error);
  }
}

export default {
  processIncomingMessage
}