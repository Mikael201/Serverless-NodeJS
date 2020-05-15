const mongoose = require('mongoose')
const scoreSchema = new mongoose.Schema({
  name: String,
  score: String
})

module.exports = mongoose.model('Score', scoreSchema)