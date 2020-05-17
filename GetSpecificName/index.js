
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = async (context) => {
    console.log("Tulee")
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        console.log("name: " + context.req.params.name)
        scoreSchema.findOne({
            name: context.req.params.name
        }).then(score => {
            console.log(score)
            context.res = {
                status: 200, //200 on defaultti
                body: score
            }
        })
    }).catch(e => console.log(e));
}
