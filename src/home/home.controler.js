export const homeControler = (req,res)=> {
    console.log(process.env.TST)
    res.render('index.ejs',{session:undefined})
}