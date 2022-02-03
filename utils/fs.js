


const fs = require('fs');
const path = require('path');


class Fs{
    constructor(dir){
        this.dir = dir
    }
    read(){
        const data = fs.readFileSync(path.resolve(__dirname, `../model/${this.dir}.json`));
        return JSON.parse(data);
    }
    write(data){
        fs.writeFileSync(path.resolve(__dirname, `../model/${this.dir}.json`), JSON.stringify(data, null, 4))
    }
}

module.exports = Fs