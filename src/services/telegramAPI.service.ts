import axios, { AxiosResponse } from 'axios';

import config from '../config/config';

import { TgMessage } from '../types';
import { TgUser } from '../types/types';

class TelegramAPI {
  private baseURL: string;
  private botToken: string;

  constructor() {
    this.baseURL = 'https://api.telegram.org/';
    this.botToken = config.botToken;
  }

  sendMessage = async (
    chat_id: number,
    text?: string,
  ): Promise<TgMessage> => {
    const response: AxiosResponse<TgMessage> = await axios.post(
      `${this.baseURL}${this.botToken}/sendMessage`,
      {
        chat_id,
        text
      }
    );
    return response.data;
  }

  greeting(toChatId: number, from?: TgUser) {
    let toName = ',';
    [from?.first_name, from?.last_name].forEach(n => {
      if (n?.length) {
        toName += ` ${n}`;
      }
    });
    this.sendMessage(toChatId, `Приветствую вас${toName.length > 1 && toName}!`);
  }
}

export default new TelegramAPI();