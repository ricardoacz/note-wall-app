const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    }
})

module.exports = new mongoose.model('Post', PostSchema)