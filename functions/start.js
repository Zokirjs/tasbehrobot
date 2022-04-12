const greating = require('./greating')
const set_region = require('./region')

async function start (ctx, User) {
    let user = await User.findOne({
        userid: ctx.from.id
    })

    if (user) {
        greating(ctx, user)
    } else {
        let newUser = new User({
            userid: ctx.from.id,
            uname: ctx.from.first_name,
            region: null,
            date: Date.now()
        })
        await newUser.save()
        greating(ctx,newUser)
        set_region(ctx)
    }
}


module.exports = start