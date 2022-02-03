const Fs = require('../utils/fs');



const users =new Fs('users')
const courses = new Fs('courses');
const groups = new Fs('groups'); 

function addUser(req, res){
    const {name, username, tel, job, password, group} =req.body

    let data = users.read();
    let courseData = courses.read();
    let GroupData = groups.read();
    let jobId = courseData.find(e=>e.id==job).id;
    let groupId = GroupData.find(e=>e.id==group).id;
    let newTeacher = {
        id:new Date().getTime(),
        name, 
        username,
        tel, 
        jobId,  
        password, 
        role:"teacher", 
        groupId
    }
     
    if(!data.find(e=>e.username ==username)){
        data.unshift(newTeacher);
        data.map((e, i)=>{
            if(e.role=="student"&&e.groupId==newTeacher.groupId){
                console.log('tENg')
                e.teacherId = newTeacher.id;
                data.splice(i, 1, e);
            }
        })
        users.write(data)
    }

    res.redirect('/admin')
}

module.exports = addUser;