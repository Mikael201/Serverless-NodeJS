
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = async (context) => {
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        const body = context.req.body
        scoreSchema.updateOne({
            name: body.name
        }, { $set: {name: "UusiNimi"}}).then(updatedUser => console.log(updatedUser)).catch(e => console.log(e))         
    });
}
