const { cookie, redirect } = require("express/lib/response");
const fs = require('fs');
const  path = require('path')
const{signUser} = require('../utils/jwt');
const Fs = require('../utils/fs')

async function checkUser(req, res){
    const {token} = req.cookies;
   let a = await res.clearCookie('token');
    const users =new Fs('users')
    const {username, password, remember} = await req.body;
    console.log(username, password)
    let data = await users.read();
    let found = await data.find(e=>e.username==username&&e.password==password);
    console.log(found)
    if(!token){
      if(found){
        console.log(username, password, remember);
        res.cookie('token', `${signUser(found.username)}`)
        if(found.role == 'student'){
            req.id = found.id;
            res.redirect('/student');
        }else if(found.role == 'teacher'){
            req.id = found.id;
            res.redirect('/teacher');
        }else{
            req.id = found.id;
            res.redirect('/admin');
        }
      } else{
         res.redirect('/login') 
      }
    }else{
        if(found.role == 'student'){
            req.id = found.id;
            res.redirect('/student');
        }else if(found.role == 'teacher'){
            req.id = found.id;
            res.redirect('/teacher');
        }else if(found.role == 'admin'){
            req.id = found.id;
            res.redirect('/admin');
        }else{
            res.redirect('/login')
        }
         
    }
  
}
 module.exports = checkUser