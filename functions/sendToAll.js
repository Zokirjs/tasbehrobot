async function sendToAll(ctx, User) {
    let users = await User.find()
    users.forEach(async function (user) {
        // ctx.copyMessage(user.userid, ctx.from.chatId, ctx.message.id)
        ctx.copyMessage(user.userid)
        await sleep(2000);
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = sendToAll