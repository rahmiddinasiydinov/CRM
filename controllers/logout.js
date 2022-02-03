
const { cookie, redirect } = require("express/lib/response");


function Logout(req, res) {
    res.clearCookie('token')
    res.status(401).redirect('/login');
}
module.exports = Logout;