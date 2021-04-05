/* eslint-disable no-undef */

// Libs
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

// Classes
import { TwitterFile } from "../../lib/TwitterFile.mjs";
import { TwitterFileStub } from "../helpers/stubs/lib/TwitterFile.stub.mjs";
import { InvalidFileExtensionError } from "../../exceptions/InvalidFileExtensionError.mjs";
import { EmptyFileError } from "../../exceptions/EmptyFileError.mjs";

// Configs
chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Tests for TwitterFile', () => {
  let twitterFile, twitterFileStub;

  before(() => {
    twitterFile = new TwitterFile();

    // twitterFileStub = new TwitterFileStub();
    //
    // twitterFileStub.read();
  });

  describe('the validate function', () => {
    describe('filePath parameter validation', () => {
      it('it should fail if filePath is empty', async () => {
        const actualData = {
          filePath: '',
        };

        await chai.expect(twitterFile.validate.bind(twitterFile, actualData.filePath))
          .to
          .throw('Empty file path for tweet.js/JSON file passed');
      });

      it('it should fail with TypeError if filePath is empty', async () => {
        const actualData = {
          filePath: '',
        };

        await chai.expect(twitterFile.validate.bind(twitterFile, actualData.filePath))
          .to
          .throw(TypeError);
      });

      it('it should fail if filePath is not a JavaScript file', async () => {
        const actualData = {
          filePath: 'tweet.bat',
        };

        await chai.expect(twitterFile.validate.bind(twitterFile, actualData.filePath))
          .to
          .throw('File path should be for a tweet.js (or any JavaScript file) or a .json file');
      });

      it('it should fail with InvalidFileExtensionError if filePath is not a JavaScript file', async () => {
        const actualData = {
          filePath: 'tweet.bat',
        };

        await chai.expect(twitterFile.validate.bind(twitterFile, actualData.filePath))
          .to
          .throw(InvalidFileExtensionError);
      });

      // it('it should fail if file is empty', async () => {
      //   const actualData = {
      //     filePath: 'tweet-empty.js',
      //   };
      //
      //   await chai.expect(twitterFile.read(actualData.filePath))
      //     .to
      //     .be
      //     .rejectedWith('Empty tweet.js or empty JSON file passed');
      // });
      //
      // it('it should fail with EmptyFileError if file is empty', async () => {
      //   const actualData = {
      //     filePath: 'tweet-empty.js'
      //   }
      //
      //   await chai.expect(twitterFile.read(actualData.filePath))
      //     .to
      //     .be
      //     .rejectedWith(EmptyFileError);
      // });

      it('it should return the filePath if everything good', async () => {
        const actualData = {
          filePath: 'tweet.js',
        };

        await chai.expect(twitterFile.validate(actualData.filePath))
          .to
          .be
          .equal(actualData.filePath);
      });
    });
  });
});
