const {
    Telegraf,
    session
} = require('telegraf')
require('dotenv').config()
const mongoose = require('mongoose')
const bot = new Telegraf(process.env.BOT_TOKEN)
const greating = require('./functions/greating')
const set_region = require('./functions/region')
mongoose.connect(process.env.DB_URL).then(
    () => {
        console.log('Connected to DB!');
    },
    err => {
        console.log('Error: ', err);
    }
)

const User = require('./db/userSchema')

bot.use(session())

bot.start(async (ctx) => {
    const user = await User.findOne({
        userid: ctx.from.id
    })

    if (user) {
        greating(ctx)
    }else {
        const newUser = new User({
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

bot.on('message', (ctx) => {
    if (ctx.session && ctx.session.ask_region) {

    } else {
        // nO
    }
})


console.clear()
bot.launch(console.log('Bot started!'))