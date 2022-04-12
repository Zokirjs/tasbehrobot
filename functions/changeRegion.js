const { Keyboard } = require('telegram-keyboard')
const keyboard = Keyboard.make([
    "🕋 Namoz Vaqtlari",
    "⚙️ Sozlamalar",
    "👨‍💻 Admin bilan aloqa"
], { columns: 2, oneTimeKeyboard: true })

async function changeRegion (ctx, User, Region) {
    let user = await User.findOne({
        userid: ctx.from.id
    })
    if (user) {
        let region = await Region.findOne({
            name: ctx.message.text
        })
        user.region = region._id
        await user.save()
        ctx.session.ask_region = null
        ctx.reply("Muvofaqqiyatli bajarildi.", keyboard.reply())
    } else {
        let newUser = new User({
            userid: ctx.from.id,
            uname: ctx.from.first_name,
            region: ctx.message.text,
            date: Date.now()
        })
        await newUser.save()
        ctx.session.ask_region = null
        ctx.reply("Muvofaqqiyatli bajarildi.", keyboard.reply())
    }
}

module.exports = changeRegion