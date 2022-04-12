require('dotenv').config()  
const {
    Keyboard
} = require('telegram-keyboard')

const greating_template = [
    "Assalom alaykum, Hurmatli foydalanuvchi!",
    "Salom, ishga tushirganingiz uchun rahmat!",
    "Salom, Xush kelibsiz."
]
const keyboard = Keyboard.make([
    "🕋 Namoz Vaqtlari",
    "⚙️ Sozlamalar",
    "👨‍💻 Admin bilan aloqa"
], {
    columns: 2,
    oneTimeKeyboard: true
})

const keyboardOfAdmin = Keyboard.make([
    "🕋 Namoz Vaqtlari",
    "⚙️ Sozlamalar",
    "👨‍💻 Admin bilan aloqa",
    "✍️ Send Message"
], {
    columns: 2,
    oneTimeKeyboard: true
})

function greating(ctx, user) {
    if (ctx.from.id == process.env.ADMIN_ID) {
        ctx.reply(greating_template[Math.floor(Math.random() * greating_template.length)], keyboardOfAdmin  .reply())
        if (!user.region) {
            ctx.reply("Bot to'liq ishlashi uchun sozlamalar bo'limidan hududingizni tanlang.")
        }
    } else {
        ctx.reply(greating_template[Math.floor(Math.random() * greating_template.length)], keyboard.reply())
        if (!user.region) {
            ctx.reply("Bot to'liq ishlashi uchun sozlamalar bo'limidan hududingizni tanlang.")
        }
    }
}

module.exports = greating