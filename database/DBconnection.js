import mongoose from "mongoose";

export const DBconnection = () =>{
    mongoose.connect(process.env.URI).then(()=>{
    //    mongoose.connect('mongodb://127.0.0.1:27017/sara7a_app_db_1').then(()=>{
    console.log(`database connected successfuly...`)
}).catch(()=>{
    console.log(`err connection whith database`)
})
}