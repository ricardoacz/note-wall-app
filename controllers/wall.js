const Post = require('../models/POST')

module.exports = {
    getMessages: async (req, res) => {
        try {
            const message = await Post.find()
            res.render('wall.ejs', {post: message})
        } catch (error) {
            console.log(error)
        }
    },

    postMessage: async (req, res) => {
        try {
            await Post.create({message: req.body.message})
            console.log('new post created')
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

