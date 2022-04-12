async function sendToAll(ctx, User, msg) {
    let users = await User.find()
    users.forEach(function (msg) {
        ctx.telegram.sendMessage(ctx.from.id, msg)
        await sleep(2000);
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = sendToAll