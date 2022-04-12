const { Keyboard } = require('telegram-keyboard')

const keyboard = Keyboard.make([
    "Toshkent shahar",
    "Toshkent viloyati",
    "Andijon viloyati",
    "Buxoro viloyati",
    "Farg'ona viloyati",
    "Jizzax viloyati",
    "Namangan viloyati",
    "Navoiy viloyati",
    "Navoiy viloyati",
    "Qashqadaryo viloyati",
    "Samarqand viloyati",
    "Sirdaryo viloyati",
    "Surxondaryo viloyati",
    "Qoraqalpog'iston Respublikasi"
], { columns: 2, oneTimeKeyboard: true })

function set_region(ctx) {
    // ctx.session.message = "region"
    ctx.reply('Ro`yxatdan o`tish uchun, Shaxar yoki viloyatingizni tanlang', keyboard.reply())
}

module.exports = set_region