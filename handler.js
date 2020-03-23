const puppeteer = require('puppeteer-core')

module.exports = (event, response) => {
  const url = event.query.url
  let title = ''
  
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.newPage();
    await page.goto(url); // 表示したいURL

    title = page.$('title')

    browser.close();
  
  response.status(200).succeed(title);
};