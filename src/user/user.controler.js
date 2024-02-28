import { messageMOdel } from "../../database/models/messageModel.js"
import { userModel } from "../../database/models/userModel.js"

const userControler = async(req,res) => {
    const user = await userModel.findById(req.params.id)
    res.render('user.ejs',{session:undefined,userId:req.params.id,user})
}

const handelUser = async (req,res)=> {
    await messageMOdel.insertMany({userId:req.params.id,message:req.body.message})
    res.redirect(`/user/${req.params.id}`)
}



export {
    userControler,
    handelUser
}