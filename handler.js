const puppeteer = require('puppeteer-core')

module.exports = (event, response) => {
  response.status(200).succeed(event.query.url);
};