var express = require('express');
var router = express.Router();

//ROUTES
const adminRoute = require('../controllers/admin');
const studentRoute = require('../controllers/student')
const teacherRoute = require('../controllers/teacher')
const loginRoute = require('../controllers/login');
const logoutRoute = require('../controllers/logout');
const checkUser = require('../controllers/loginAuth');
const addUser = require('../controllers/addUser');
const addStudent = require('../controllers/addStudent');
const addGroup = require('../controllers/addGroup');
const addCourse = require('../controllers/addCourse');
const home = require('../controllers/home')
//MIDDLEWARES
const checkToken = require('../middlewares/Auth');
const checkTokenTeacher = require('../middlewares/authTeacher');
const checkTokenStudent = require('../middlewares/authStudent');
/* GET home page. */
router
.get('/', home)
.get('/admin',checkToken ,adminRoute)
.get('/teacher',checkTokenTeacher ,teacherRoute)
.get('/student',checkTokenStudent ,studentRoute)
.get('/login', loginRoute)
.get('/logout', logoutRoute);

//  POST info  
router
.post('/signin', checkUser)
.post('/addUser',  checkToken,addUser)
.post('/addStudent',checkToken, addStudent)
.post('/addGroup', checkToken, addGroup)
.post('/addCourse', checkToken, addCourse)

module.exports = router;
