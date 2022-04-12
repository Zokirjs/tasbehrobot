const mongooose = require('mongoose');

const regionSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    users: [{
        type: mongooose.Schema.Types.ObjectId,
        ref: 'User',
    }]
})

module.exports = mongooose.model('Region', regionSchema);