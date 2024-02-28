import express from 'express'
import { homeControler } from './home.controler.js'

const homeRouter = express.Router()

homeRouter.get('/',homeControler)

export {
    homeRouter
}