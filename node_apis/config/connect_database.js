const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('<URI>', {
        useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,
    }).then(() => {
        console.log("Connected To Database !");
    }).catch((err) => {
        console.error(err);
    })
}