const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const greating = require('./functions/greating')
const set_region = require('./functions/region')

bot.start((ctx) => {
    greating(ctx)
    set_region(ctx)
})

bot.launch(console.log('Bot started!'))

