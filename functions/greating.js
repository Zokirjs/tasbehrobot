const greating_template = [
    "Assalom alaykum, Hurmatli foydalanuvchi!",
    "Salom, ishga tushirganingiz uchun rahmat!",
    `Salom, ${ctx.from.first_name}!`,
    "Salom, Xush kelibsiz."
]

function greating(ctx) {
    ctx.response.body = greating_template[Math.floor(Math.random() * greating_template.length)]
    ctx.reply(ctx.response.body)
}