const Post = require('../models/Post')

module.exports = {
    getMessages: async (req, res) => {
        try {
            const message = await Post.find().populate('userId', 'username')
            console.log(message)
            res.render('wall.ejs', {post: message})
        } catch (error) {
            console.log(error)
        }
    },

    postMessage: async (req, res) => {
        try {
            await Post.create({message: req.body.message, userId:req.user._id})
            console.log('new post created')
            res.redirect('/wall')
        } catch (error) {
            console.log(error)
        }
    },
    deletePost: async (req, res) => {
        try {
            await Post.findOneAndDelete({_id:req.body.postId})
            console.log('Post deleted')
            res.json('Post deleted')
        } catch (error) {
            console.log('failed to delete post on database', error)
        }
    }
}

