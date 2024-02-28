import { messageMOdel } from "../../database/models/messageModel.js"

const messageControler = async (req,res) => {
    let fullUrl = req.protocol + '://' + req.get('host') + '/user/' + req.session.ID
    if(!req.session.isLogedIn) return res.redirect('/login')
    const messages = await messageMOdel.find({userId:req.session.ID})
    res.render('messages.ejs',{session:req.session,fullUrl,messages})
}


export {
    messageControler,
}