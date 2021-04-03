/* eslint-disable no-undef */

// Libs
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

// Classes
import {TweetHandler} from "../../src/TweetHandler.mjs";

// Configs
chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Tests for TweetHandler', () => {
  let tweetHandler;

  before(() => {
    tweetHandler = new TweetHandler();
  });

  describe('the delete function', () => {
    it('it should fail if date is NaN', async () => {
      const actualData = {
        filePath: './test',
        date: 'a',
        number: '1'
      }

      await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
        .to
        .be
        .rejectedWith('Invalid start date to delete passed');

      await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
        .to
        .be
        .rejectedWith(TypeError);
    });

    it('it should fail with TypeError if date is NaN', async () => {
      const actualData = {
        filePath: './test',
        date: 'a',
        number: '1'
      }

      await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
        .to
        .be
        .rejectedWith(TypeError);
    });

    it('it should fail if number is NaN', async () => {
      const actualData = {
        filePath: './test',
        date: '2021-01-01',
        number: 'a'
      }

      await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
        .to
        .be
        .rejectedWith('Invalid number of tweets to delete passed');

      await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
        .to
        .be
        .rejectedWith(TypeError);
    });

    it('it should fail with TypeError if number is NaN', async () => {
      const actualData = {
        filePath: './test',
        date: '2021-01-01',
        number: 'a'
      }

      await chai.expect(tweetHandler.delete(actualData.filePath, actualData.date, actualData.number))
        .to
        .be
        .rejectedWith(TypeError);
    });
  });
})
