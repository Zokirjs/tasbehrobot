require('dotenv').config()
const { Telegraf, session } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(session())
// Bot setting up

const mongoose = require('mongoose')
const User = require('./db/userSchema')
const Region = require('./db/regionSchema')

mongoose.connect(process.env.DB_URL).then(
    () => {
        console.log('Connected to DB!');
    },
    err => {
        console.log('Error: ', err);
    }
)
// Database setting up

const start = require('./functions/start')
const changeRegion = require('./functions/changeRegion')
const contact = require('./functions/contact')




bot.start((ctx) => start(ctx, User))

bot.on('message', async (ctx) => {
    if (ctx.session && ctx.session.ask_region) {
        changeRegion(ctx, User, Region)
    } else {
        switch (ctx.message.text) {
            case "🕋 Namoz Vaqtlari": {
                break;
            }
            case "⚙️ Sozlamalar": {
                set_region(ctx)
                break;
            }
            case "👨‍💻 Admin bilan aloqa": {
                contact(ctx)
                break;
            }

        }
    }
})


console.clear()
bot.launch(console.log('Bot started!'))