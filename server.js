process.on('uncaughtException',(err)=> {
  console.log(err)
})
import 'dotenv/config'
import express from 'express'
import { DBconnection } from './database/DBconnection.js'
import { homeRouter } from './src/home/home.router.js'
import { registerRouter } from './src/register/register.router.js'
import { loginRouter } from './src/login/login.router.js'
import { messageRouter } from './src/messages/message.router.js'
import { userRouter } from './src/user/user.router.js'
import session from 'express-session'
import MongoSession from 'connect-mongodb-session'
import { appError } from './src/utils/appError.js'
const MongoDBStore = MongoSession(session)

const app = express()
const port = 3000

var store = new MongoDBStore({
    uri: 'mongodb+srv://ahmed:ahmedgamal@cluster0.41ojruz.mongodb.net/sara7a_app_db',
    collection: 'mySessions'
  });

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(homeRouter)
app.use(registerRouter)
app.use(loginRouter)
app.use(messageRouter)
app.use(userRouter)

app.get('/logout',(req,res)=> {
  req.session.destroy(()=>{
    res.redirect('/login')
  })
})


DBconnection()


process.on('unhandledRejection',(err)=>{
  console.log(err)
})

app.listen(process.env.PORT|| port,()=> console.log(`server is running on port ${port}...!`))