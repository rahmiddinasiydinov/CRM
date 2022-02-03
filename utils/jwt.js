const {sign, verify} = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secretKey = process.env.SECRET_KEY ; 

function signUser(username){
    return sign(username, secretKey)
}
function verifyUser(token){
    return verify(token, secretKey);
}

module.exports ={signUser, verifyUser}