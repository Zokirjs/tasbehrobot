const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const greating = require('./functions/greating')

bot.start((ctx) => greating(ctx))

bot.launch(console.log('Bot started!'))

