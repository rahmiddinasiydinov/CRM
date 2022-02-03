const Fs = require('../utils/fs');
const path = require('path')

const users = new Fs('users');
const groups = new Fs('groups');
const courses = new Fs('courses');
function Teacher(req, res){
    let id= req.id;
    let data = users.read()
    let courseData = courses.read();
    let groupData = groups.read();
    let found = data.find(e=>e.id==id);
    let foundJob = courseData.find(e=>e.id==found.jobId)
    let foundGroup = groupData.find(e=>e.id==found.groupId)
    let students = data.filter(e=>e.teacherId==found.id);
    let readyTeacher ={
        id:found.id,
        name:found.name,
        tel:found.tel,
        job:foundJob.name||'',
        group:foundGroup.name||'',
        students:students,
        duration:foundJob.duration,
        role:"teacher"

    }
    


    console.log(found)
    res.render(path.resolve(__dirname, "../views/teachers.ejs"), {
        teacher:readyTeacher
    });
}
module.exports = Teacher