
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = (event, context) => {
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        scoreSchema.find({

        }).then(scores => {
            console.log(scores)
        })
    });
}


/*
userModel.findOne({

}).then(user => {

})*/