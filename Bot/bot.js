import { Telegraf } from "telegraf";
const TOKEN = "6503004915:AAFmA7nrH9i1o8fLJD-05pCpfqjszHOq35Y";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://6690be122f8951c8b9549c32--shiny-bubblegum-94c111.netlify.app/";

bot.start((e) =>
  e.reply("Welcome:::::", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
