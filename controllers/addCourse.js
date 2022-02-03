const Fs = require('../utils/fs');



const courses = new Fs('courses'); 

function addGroup(req, res){
    const {name, duration} =req.body;


    let courseData = courses.read();
    let newGroup ={
        id:new Date().getTime(),
        name,
        duration
    }
     
    if(!courseData.find(e=>e.name == name)){
        courseData.unshift(newGroup);
        console.log(courseData)
        courses.write(courseData)
    }

    res.redirect('/admin')
}

module.exports = addGroup;