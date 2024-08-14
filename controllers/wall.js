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
            // Find the post by ID
            const post = await Post.findById(req.body.postId)
           // Check if the post exists and if the logged-in user is the owner
            if (post && post.userId.equals(req.user._id)) {
                await Post.findOneAndDelete({ _id: req.body.postId })
                console.log('Post deleted')
                res.json('Post deleted')
            } else {
                console.log('Unauthorized attempt to delete post')
                res.status(403).json('You are not authorized to delete this post')
            }
        } catch (error) {
            console.log('failed to delete post on database', error)
        }
    }
}

