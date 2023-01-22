export async function GetFreeGamesUrl(page) {
  await page.goto(process.env.SITE, {
    waitUntil: "networkidle2",
  });

  await page.click(`.slide-menu-toggle`);
  const subMenu = await page.waitForSelector(`.submenu-toggle`);
  await subMenu.click();
  const jogosGratisItem = await page.waitForSelector("text/Jogos Grátis");
  await jogosGratisItem.click();
  await page.waitForNavigation({ waitUntil: "domcontentloaded" });

  const url = await page.url();
  return url;
}
