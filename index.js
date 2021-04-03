require('dotenv').config();

const yargs = require('yargs');

async function main() {
  const argv = yargs
    .usage('Usage: $0 [options]')
    .alias('d', 'date')
    .nargs('d', 1)
    .describe('d', 'date used to delete tweets in yyyy-mm-dd')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'tweet.js file location')
    .alias('n', 'number')
    .nargs('n', 1)
    .describe('n', 'number of tweets to delete')
    .default('n', 100)
    .demand(['d'])
    .help('h')
    .alias('h', 'help')
    .argv;
}

main();
