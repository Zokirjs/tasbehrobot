const mongooose = require('mongoose');
const { schema } = require('./regionSchema');
const userSchema = new mongooose.Schema({
    uname: {
        type: String,
    },
    userid: {
        type: String,
        required: true,
    },
    region: {
        type: mongooose.Schema.Types.ObjectId,
        ref: 'Region',
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongooose.model('User', userSchema);