const Fs = require('../utils/fs');
const path = require('path')

const users = new Fs('users');
const groups = new Fs('groups');
const courses = new Fs('courses');
function Student(req, res){
    let id= req.id;
    let data = users.read();
    let dataGroups = groups.read();
    let dataCourse = courses.read();
    let found = data.find(e=>e.id==id);
    let foundGroup = dataGroups.find(e=>e.id==found.groupId);
    console.log(found)
    let foundTeacher = data.find(e=>e.role=="teacher"&&e.id==found.teacherId);
    let foundCourse = dataCourse.find(e=>e.id==found.courseId)

    let readyStudent = {
        id:found.id,
        role:found.role,
        name:found.name,
        username:found.username,
        tel: found.tel,
        password:found.password,
        course:foundCourse.name ||'',
        group:foundGroup.name ||'',
        teacher:foundTeacher.name||'',
        duration:foundCourse.duration||''
    }



    console.log(readyStudent)
    res.render(path.join(__dirname, '../views/students.ejs'),{
        student:readyStudent
    });
}

module.exports = Student;