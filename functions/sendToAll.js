function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

forEach(function (message) {
    ctx.telegram.sendMessage(message.id, ctx.message.text)
    await sleep(2000);
})