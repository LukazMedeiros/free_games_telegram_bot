export async function GetFreeGamesData(page, url) {
  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const anchors = await page.$$eval(".post-body a", (anchor) =>
    anchor.map((a) => {
      return {
        title: a.innerText,
        link: a.href,
      };
    })
  );

  const linksData = anchors.filter((item) => {
    if (
      !item.link.includes("nerdmaldito") &&
      !item.link.includes("discordapp") &&
      !item.link.includes("twitch") &&
      !item.link.includes("blogger") &&
      !item.title == "" &&
      item.title != "clicar aqui"
    ) {
      return item;
    }
  });

  console.log(linksData);

  return linksData;
}
