import Twitter from 'twitter';

class TwitterConnector {
  #twitter;

  constructor() {
    this.#twitter = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    })
  }

  get twitter() {
    return this.#twitter;
  }

  set twitter(twitter) {
    this.#twitter = twitter;
  }
}

export { TwitterConnector };
