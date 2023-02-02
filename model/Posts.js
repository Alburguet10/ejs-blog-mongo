let mongoose = require("mongoose")
let Schema = mongoose.Schema

let PostsSchema = Schema({

title: String,
author: String,
post_data: String,
post_date : {
    type: Date,
    default:Date.now()
}
})

module.exports = mongoose.model('posts',PostsSchema)