import { config } from "dotenv";
import { CreateBrowser } from "./src/puppeteer/createBrowser.js";
import { GetFreeGamesData } from "./src/services/getFreeGamesData.js";
import { GetFreeGamesUrl } from "./src/services/getFreeGamesUrl.js";
import { SendMessage } from "./src/services/telegramBotSendMessage.js";

config();

async function Main() {
  const page = await CreateBrowser();

  const url = await GetFreeGamesUrl(page);
  console.log(url);

  const linksData = await GetFreeGamesData(page, url);

  let message = "jogos gratis de hoje \n\n";

  linksData.forEach((element) => {
    message += `${element.title} \n ${element.link} \n\n`;
  });

  message += "para mais acesse: https://www.nerdmaldito.com/";

  SendMessage(message);
}

Main();
