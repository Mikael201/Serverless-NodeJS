
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = async (context) => {
    console.log("Tulee")
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        const body = context.req.body
        console.log(body.name)
        scoreSchema.findOne({
            name: body.name
        }).then(score => {
            console.log(score)
            context.res = {
                status: 200, //200 on defaultti
                body: score
            }
        })
    }).catch(e => console.log(e));
}
