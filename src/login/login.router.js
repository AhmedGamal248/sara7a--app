import express from 'express'
import { handleLogin, loginControler } from './login.controler.js'

const loginRouter = express.Router()

loginRouter.get('/login',loginControler)
loginRouter.post('/handleLogin',handleLogin)

export{
    loginRouter
}