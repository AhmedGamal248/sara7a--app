import express from 'express'
import { handleRegister, registerControler } from './register.controler.js'
import { signUpValidation } from '../register/register.validation.js'
import { validation } from '../middelwar/validation.js'

const registerRouter = express.Router()

registerRouter.get('/register',registerControler)
registerRouter.post('/handleRegister',validation(signUpValidation),handleRegister)

export{
    registerRouter
}