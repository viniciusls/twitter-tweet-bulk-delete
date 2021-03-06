/* eslint-disable no-undef */

// Libs
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

// Classes
import { EmptyFileError } from "../../exceptions/EmptyFileError.mjs";
import { TweetHandler } from "../../src/TweetHandler.mjs";
import { TwitterFileStub } from "../helpers/stubs/lib/TwitterFile.stub.mjs";
import {InvalidFileExtensionError} from "../../exceptions/InvalidFileExtensionError.mjs";

// Configs
chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Tests for TweetHandler', () => {
  let tweetHandler, twitterFileStub;

  before(() => {
    tweetHandler = new TweetHandler();

    twitterFileStub = new TwitterFileStub();

    twitterFileStub.read();
  });

  describe('the delete function', () => {
    describe('filePath parameter validation', () => {
      it('it should fail if filePath is empty', async () => {
        const actualData = {
          filePath: '',
          date: '2021-01-01',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith('Empty file path for tweet.js file passed');
      });

      it('it should fail with TypeError if filePath is empty', async () => {
        const actualData = {
          filePath: '',
          date: '2021-01-01',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith(TypeError);
      });

      it('it should fail if filePath is not a JavaScript file', async () => {
        const actualData = {
          filePath: 'tweet.bat',
          date: '2021-01-01',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith('File path should be for a tweet.js (or any JavaScript file)');
      });

      it('it should fail with InvalidFileExtensionError if filePath is not a JavaScript file', async () => {
        const actualData = {
          filePath: 'tweet.bat',
          date: '2021-01-01',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith(InvalidFileExtensionError);
      });

      it('it should fail if file is empty', async () => {
        const actualData = {
          filePath: 'tweet-empty.js',
          date: '2021-01-01',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith('Empty tweet.js file passed');
      });

      it('it should fail with EmptyFileError if file is empty', async () => {
        const actualData = {
          filePath: 'tweet-empty.js',
          date: '2021-01-01',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith(EmptyFileError);
      });
    });

    describe('date parameter validation', () => {
      it('it should fail if date is NaN', async () => {
        const actualData = {
          filePath: 'tweet.js',
          date: 'a',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith('Invalid start date to delete passed');
      });

      it('it should fail with TypeError if date is NaN', async () => {
        const actualData = {
          filePath: 'tweet.js',
          date: 'a',
          number: '1'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith(TypeError);
      });
    });

    describe('number parameter validation', () => {
      it('it should fail if number is NaN', async () => {
        const actualData = {
          filePath: 'tweet.js',
          date: '2021-01-01',
          number: 'a'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith('Invalid number of tweets to delete passed');
      });

      it('it should fail with TypeError if number is NaN', async () => {
        const actualData = {
          filePath: 'tweet.js',
          date: '2021-01-01',
          number: 'a'
        }

        await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
          .to
          .be
          .rejectedWith(TypeError);
      });
    });
  });
})
