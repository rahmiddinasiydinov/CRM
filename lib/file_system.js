const fs  = require('fs');
const path = require('path');

class Fs{
    constructor(dir){
        this.dir = dir
    }
     
    read(){
        return fs.readFileSync(path.resolve(__dirname, `../model/${this.dir}`))
    }
    write(data){
        fs.writeFileSync(path.resolve(__dirname, `../model/${this.dir}`), JSON.stringify(data, null, 4))
    }
}

module.exports = Fs;


