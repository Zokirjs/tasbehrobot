const greating_template = [
    "Assalom alaykum, Hurmatli foydalanuvchi!",
    "Salom, ishga tushirganingiz uchun rahmat!",
    "Salom, Xush kelibsiz."
]
function greating(ctx) {
    ctx.reply(greating_template[Math.floor(Math.random() * greating_template.length)])
}

module.exports = greating