const axios = require('axios');

const logger = require('../config/logger');
const config = require('../config/config');

const processIncomingMessage = async (telegramMessage) => {
  try {
    await axios.post(
      `https://api.telegram.org/${config.botToken}/sendMessage`,
      {
        chat_id: telegramMessage.chat.id,
        text: "Приветствую вас!",
      }
    );
    logger.info('Message posted.');
  } catch (error) {
    logger.error("Error: ", error);
    res.end("Error: " + error);
  }
}

module.exports = {
  processIncomingMessage
}