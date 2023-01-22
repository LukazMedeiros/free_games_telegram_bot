import { launch } from "puppeteer";

export async function CreateBrowser() {
  try {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";

    const browser = await launch({
      headless: false,
      slowMo: 100,
    });

    const page = await browser.newPage();

    await page.setUserAgent(userAgent);

    return page;
  } catch (error) {
    console.error(`erro ao criar navegador - ${error}`);
  }
}
