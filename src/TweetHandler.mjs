import fs from 'node:fs/promises';
import { TwitterConnector } from '../lib/TwitterConnector.mjs';

class TweetHandler {
  #connector;

  constructor() {
    this.#connector = new TwitterConnector().twitter;
  }

  /**
   *
   * @param {string} filePath
   * @param {string} date
   * @param {number} number
   * @returns {Promise<void>}
   */
  async delete(filePath, date, number) {
    const cutOffDate = Date.parse(date);

    if (isNaN(cutOffDate)) {
      throw new TypeError('Invalid start date to delete passed');
    }

    const maxDeleteNumber = parseInt(number);

    if (isNaN(maxDeleteNumber)) {
      throw new TypeError('Invalid number of tweets to delete passed');
    }

    return true;
  }
}


export { TweetHandler };

