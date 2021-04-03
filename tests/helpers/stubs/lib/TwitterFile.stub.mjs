import sinon from "sinon";
import { TwitterFile } from "../../../../lib/TwitterFile.mjs";

class TwitterFileStub {
  read() {
    let read = sinon.stub(TwitterFile.prototype, 'read');

    read.withArgs('tweet-empty.js')
      .returns(Promise.resolve(''));

    read.withArgs('tweet-wrong-format.js')
      .returns(Promise.resolve([{
          "tweet": {
            "retweeted": false,
            "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [],
              "urls": []
            },
            "display_text_range": ["0", "29"],
            "favorite_count": "0",
            "id_str": "58702329356091392",
            "truncated": false,
            "retweet_count": "0",
            "id": "58702329356091392",
            "created_at": "Fri Apr 15 01:25:00 +0000 2011",
            "favorited": false,
            "full_text": "Vou ouvir System of a Down ;D",
            "lang": "pt"
          }
        }])
      );

    read.withArgs('')
      .rejects('undefined');

    read.withArgs('1')
      .rejects('undefined');

    return read;
  }
}

export { TwitterFileStub };
