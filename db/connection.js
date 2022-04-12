const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URL).then(
    () => {
        console.log('Connected to DB!');
    },
    err => {
        console.log('Error: ', err);
    }
)

