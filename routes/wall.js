const express = require('express')
const router = express.Router()
const wallController = require('../controllers/wall')

router.get('/', wallController.getMessages)
router.post('/postMessage', wallController.postMessage)
router.delete('/deletePost', wallController.deletePost)

module.exports = router