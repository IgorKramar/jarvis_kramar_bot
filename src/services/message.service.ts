import axios from 'axios';

import logger from '../config/logger';
import config from '../config/config';
import { TgMessage } from './telegram/types';

const processIncomingMessage = async (telegramMessage: TgMessage) => {
  console.log('message', telegramMessage);
  try {
    await axios.post(
      `https://api.telegram.org/${config.botToken}/sendMessage`,
      {
        chat_id: telegramMessage?.chat?.id,
        text: `Приветствую вас, ${telegramMessage.from?.first_name} ${telegramMessage.from?.last_name}!`,
      }
    );
    logger.info('Message posted.');
  } catch (error) {
    logger.error("Error: ", error);
  }
}

export default {
  processIncomingMessage
}