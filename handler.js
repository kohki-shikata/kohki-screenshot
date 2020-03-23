const puppeteer = require('puppeteer-core')

module.exports = (event, response) => {
  const url = event.query.url
  (async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    page.setViewport({width: 1024, height: 800})
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const title = page.$('title')
    await browser.close()
  })();
  response.status(200).succeed(title);
};