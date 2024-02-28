import mongoose from "mongoose";

const schema =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    PasswordConfirmation:String,
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    verfiyEmail:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const userModel = mongoose.model('user',schema)


export {
    userModel
}