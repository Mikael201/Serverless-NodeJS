
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = async (context) => {
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        console.log("Id: " + context.req.params.id)
        scoreSchema.findOne({
            _id: context.req.params.id
        }).then(score => {
            console.log(score)
            context.res = {
                status: 200, //200 on defaultti
                body: score
            }
        })
    });
}
