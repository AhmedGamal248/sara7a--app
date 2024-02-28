import { userModel } from "../../database/models/userModel.js"

export const registerControler = (req,res) => {
    res.render('register.ejs',{error:req.query?.error , session:undefined})
}

export const handleRegister = async (req,res) => {
    const isFound = await userModel.findOne({email:req.body.email})
    if (isFound){
        return res.redirect('/register?error=user alredy exist')
    } else {
        await userModel.insertMany(req.body)
        res.redirect('/login')
    }
}