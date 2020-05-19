
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = async (context) => {
    const body = context.req.body
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        scoreSchema.deleteOne({
            name: body.name
        }).then(deletedName => {
            console.log(deletedName)
        }).catch(e => console.log(e))
    });
}
