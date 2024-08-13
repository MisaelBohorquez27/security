 /* Autorización */

 var authorizationSession = (req, res, next) => {
    if(process.env.ALL_GRANTED.includes(req.session.role)) {
        return  res.next();
    } else{
        return res.redirect("/")
    }
}
var  UserSession = (req, res, next) => {
    if(process.env.USER_GRANTED.includes(req.session.role)) {
        return res.next;
    } else{
        return res.redirect("/")
    }
}

module.exports = authorizationSession;
module.exports=UserSession;