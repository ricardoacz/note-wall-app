const express = require('express')
const router = express.Router()
const wallController = require('../controllers/wall')
const {ensureAuth} = require('../middleware/auth')

router.get('/', ensureAuth, wallController.getMessages)
router.post('/postMessage', wallController.postMessage)
router.delete('/deletePost', wallController.deletePost)

module.exports = router