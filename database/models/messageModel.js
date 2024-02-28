import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId , ref:'user'
    },
    message:String
},{timestamps:true})

const messageMOdel = mongoose.model('message',schema)

export {
    messageMOdel
}