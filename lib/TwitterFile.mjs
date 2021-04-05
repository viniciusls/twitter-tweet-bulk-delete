import fs from 'node:fs/promises';
import { extname } from "path";
import { InvalidFileExtensionError } from "../exceptions/InvalidFileExtensionError.mjs";

class TwitterFile {
  #content;

  /**
   * @param {string} filePath
   * @returns {boolean}
   */
  async read(filePath) {
    this.validate(filePath);

    return true;
  }

  /**
   *
   * @param {string} filePath
   * @returns {TypeError|InvalidFileExtensionError|string}
   */
  validate(filePath) {
    if (!filePath) {
      throw new TypeError('Empty file path for tweet.js/JSON file passed');
    }

    if (!['.js', '.json'].includes(extname(filePath))) {
      throw new InvalidFileExtensionError('File path should be for a tweet.js (or any JavaScript file) or a .json file');
    }

    return filePath;
  }

  toJson() {

  }
}

export { TwitterFile };
