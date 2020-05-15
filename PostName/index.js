
const mongoose = require('mongoose')
const scoreSchema = require('../scores')
const url = process.env["URL"]
const mongooseConnector = mongoose.connect(url, {useNewUrlParser:true})
module.exports = async (context) => {
    context.callbackWaitForEmptyEventLoop = false;
    mongooseConnector.then(() => {
        const body = context.req.body;
        const Score = new scoreSchema({
            name: body.name,
            score: body.score
        })
        Score.save().then(score => {
            console.log("score: " + score)
        })        
    });
}
