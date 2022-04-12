const { Telegraf, session } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const greating = require('./functions/greating')
const set_region = require('./functions/region')
const connection = require('./db/connection')


bot.use(session())

bot.start((ctx) => {
    greating(ctx)
    set_region(ctx)
})

bot.on('message', (ctx) => {
    if (ctx.session && ctx.session.ask_region) {
        // oK
    }else {
        // nO
    }
})

bot.launch(console.log('Bot started!'))


