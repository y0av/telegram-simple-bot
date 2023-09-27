/**
 * a simple telegram bot that respond /start
 * and creates a telegram inline messege with a game link
 * -
 * to set the telegram.token with the command:
 * firebase functions:config:set telegram.token="<telegram-bot-token>"
 * -
 */

// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const {Telegraf} = require("telegraf");
// const express = require("express");
// const app = express();

const bot = new Telegraf(functions.config().telegram.token, {
  telegram: {webhookReply: true},
});
const GAME_SHORT_NAME = "yfinball";
const GAME_URL = "https://yfinball.web.app/";

// error handling
bot.catch((err, ctx) => {
  logger.error("Error", err);
  return ctx.reply("Error ${ctx.updateType}", err);
});

bot.start((ctx) => ctx.sendGame(GAME_SHORT_NAME));
bot.gameQuery((ctx) => ctx.answerGameQuery(GAME_URL));
bot.launch();
