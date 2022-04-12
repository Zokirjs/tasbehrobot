module.exports = setSending

function setSending (ctx) {
    ctx.session = {
        setSending: 1
    }
    ctx.reply("Send your message")
}
