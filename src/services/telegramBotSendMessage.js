import { Telegraf } from "telegraf";

export function SendMessage(message) {
  const bot = new Telegraf(process.env.TOKEN);
  bot.telegram.sendMessage(process.env.CHAT_ID, message, {
    disable_web_page_preview: true,
  });
}
