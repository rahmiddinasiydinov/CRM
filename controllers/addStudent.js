const Fs = require('../utils/fs');



const users =new Fs('users')

function addStudent(req, res){
    const {name, username, tel, course, password, group} =req.body
    let data = users.read();
    let teacherId = data.find(e=>e.role=='teacher'&&e.groupId == group);
    let newStudent = {
        id:new Date().getTime(),
        name, 
        username,
        tel, 
        courseId:Number(course), 
        teacherId :teacherId?teacherId.id :0,
        groupId:Number(group), 
        password, 
        role:"student", 
    }
     
    if(!data.find(e=>e.username ==username)){
        data.unshift(newStudent);
        console.log(data)
        users.write(data)
    }

    res.redirect('/admin')
}

module.exports = addStudent;