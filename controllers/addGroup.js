const Fs = require('../utils/fs');



const courses = new Fs('courses'); 
const groups = new Fs('groups')

function addGroup(req, res){
    const {name, course} =req.body;


    let groupData = groups.read();
    let newGroup = {
        id:new Date().getTime(),
        name, 
        courseId:Number(course)
    }
     
    if(!groupData.find(e=>e.name == name)){
        groupData.unshift(newGroup);
        console.log(groupData)
        groups.write(groupData)
    }

    res.redirect('/admin')
}

module.exports = addGroup;