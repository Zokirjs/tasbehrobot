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


const greating = require('./functions/greating')
const set_region = require('./functions/region')
const changeRegion = require('./functions/changeRegion')




bot.start(async (ctx) => {
    let user = await User.findOne({
        userid: ctx.from.id
    })

    if (user) {
        greating(ctx, user)
    } else {
        let newUser = new User({
            userid: ctx.from.id,
            uname: ctx.from.first_name,
            region: null,
            date: Date.now()
        })
        await newUser.save()
        greating(ctx)
        set_region(ctx)
    }


})

bot.on('message', async (ctx) => {
    console.log(ctx.session)
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

                break;
            }

        }
    }
})


console.clear()
bot.launch(console.log('Bot started!'))