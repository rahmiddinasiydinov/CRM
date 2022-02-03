const { cookie, redirect } = require("express/lib/response");
const Fs = require('../utils/fs');
const {verifyUser} = require('../utils/jwt')


const users = new Fs("users")

function checkTokenTeacher(req, res, next){
    const {token} = req.cookies;
    if(token){
        try{
            const verified = verifyUser(token);
            let data = users.read();
            let found = data.find(e=>e.username==verified);
            if(found.role=='teacher'){
                req.id = found.id;
                console.log('passed')

                next()
                
            }
        }
        catch(err){
            res.clearCookie('token')
            res.redirect('/login')
        } 
        
    } 
    else{
        res.redirect('/login')
    }
}
module.exports = checkTokenTeacher;