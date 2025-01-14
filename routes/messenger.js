const express = require('express')
const { setConversation, getConversation, setMessage, getMessages, checkConversationId } = require('../controller/messenger')

const router = express.Router()



router.post('/conversation', setConversation)

router.post('/message', setMessage)

router.get('/conversation/:userId', getConversation )

router.get('/message/:conversationId', getMessages)

router.get('/conversation/find/:firstUserId/:secondUserId', checkConversationId)


module.exports = router