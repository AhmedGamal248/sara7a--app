import { userModel } from "../../database/models/userModel.js"

export const loginControler = (req,res) => {
    res.render('login.ejs',{error:req.query?.error , session:undefined})
}



export const handleLogin = async (req,res) => {
    const isFound = await userModel.findOne({email:req.body.email})
    if (isFound && isFound.password == req.body.password) {
        req.session.isLogedIn = true
        req.session.name = isFound.name
        req.session.ID = isFound._id
        res.redirect('message')
    } else {
        res.redirect('login?error=email or password is not correct')
    }
}