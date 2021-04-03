import fs from 'node:fs/promises';
import { EmptyFileError } from "../exceptions/EmptyFileError.mjs";
import { TwitterConnector } from '../lib/TwitterConnector.mjs';
import { TwitterFile } from "../lib/TwitterFile.mjs";

class TweetHandler {
  #connector;
  #fileHandler;

  constructor() {
    this.#connector = new TwitterConnector().twitter;
    this.#fileHandler = new TwitterFile();
  }

  /**
   *
   * @param {string} filePath
   * @param {string} date
   * @param {number} number
   * @returns {Promise<void>}
   */
  async delete(filePath, date, number) {
    const { file, cutOffDate, maxDeleteNumber } = await this.validate(filePath, date, number);

    return true;
  }

  async validate(filePath, date, number) {
    if (!filePath) {
      throw new TypeError('Empty file path for tweet.js file passed');
    }

    const file = await this.#fileHandler.read(filePath);

    if (!file.length) {
      throw new EmptyFileError('Empty tweet.js file passed');
    }

    const cutOffDate = Date.parse(date);

    if (isNaN(cutOffDate)) {
      throw new TypeError('Invalid start date to delete passed');
    }

    const maxDeleteNumber = parseInt(number);

    if (isNaN(maxDeleteNumber)) {
      throw new TypeError('Invalid number of tweets to delete passed');
    }

    return { file, cutOffDate, maxDeleteNumber };
  }
}


export { TweetHandler };

