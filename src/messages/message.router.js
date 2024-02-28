import express from 'express'
import { messageControler } from './message.controler.js'

const messageRouter = express.Router()

messageRouter.get('/message',messageControler)

// messageRouter.post('/m   essage',sendMessage)

export{
    messageRouter
}