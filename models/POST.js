const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = new mongoose.model('Post', PostSchema)