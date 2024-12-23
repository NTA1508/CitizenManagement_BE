module.exports = (req,res,next)=>{
    //check role b1
    if(req.decodedToken.role != 'B1') return res.status(403).send('access denied')
    return next()
}