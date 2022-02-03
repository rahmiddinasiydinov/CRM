const Fs = require('../utils/fs');

const users = new Fs('users');
const course = new Fs('courses');
const groups = new Fs('groups');
function Admin(req, res){
    let id= req.id;
    let data = users.read();
    let dataCourse = course.read();
    let dataGroups = groups.read();
    let found = data.find(e=>e.id==id);
    //sending teachers;
    let teachers = data.filter(e=>e.role=='teacher');
    let readyTeachers = teachers.map(t=>{
        let teacherJob = dataCourse.find(e=>e.id==t.jobId).name;
        let teacherGroups = dataGroups.find(e=>e.id==t.groupId).name
        return{
            id:t.id,
            name:t.name,
            course:teacherJob, 
            groups:teacherGroups, 
            tel:t.tel, 
            username:t.username,
            password:t.password 
        }
    })
    //sending Students
    let students = data.filter(e=>e.role=='student');
    let readyStudents = students.map(s=>{
        let foundCourse = dataCourse.find(e=>e.id == s.courseId).name;
        let foundGroup  = dataGroups.find(e=>e.id == s.groupId).name;
        let foundTeacher = data.find(e=>e.id==s.teacherId);
        return{
            id:s.id,
            name: s.name, 
            tel:s.tel,
            username:s.username,
            password:s.password,
            course:foundCourse, 
            group:foundGroup, 
            teacher: foundTeacher?foundTeacher.name:''
        }
   

    })
    // sending Groups
    let readyGroups = dataGroups.map(g=>{
        let foundCourse = dataCourse.find(e=>e.id==g.courseId).name;
        return {
            id:g.id,
            name:g.name,
            course:foundCourse,

        }
    })


    res.render('index', {
        courses:dataCourse, 
        groups:readyGroups, 
        admin:found, 
        teacher:readyTeachers, 
        student:readyStudents
    });
}
module.exports = Admin