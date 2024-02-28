import express from 'express'
import { handelUser, userControler } from './user.controler.js'

const userRouter = express.Router()

userRouter.get('/user/:id',userControler)

userRouter.post('/handelUser/:id',handelUser)

export{
    userRouter
}