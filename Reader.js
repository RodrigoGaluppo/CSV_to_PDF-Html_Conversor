const fs = require('fs')
const util = require('util')



class Reader{

    constructor(){
        this.read = util.promisify(fs.readFile)
    }

    async Read(filepath){
        try{
            return fs.readFileSync(filepath,{encoding:'utf8', flag:'r'})
        }catch(e){
            console.log(e)
            return null
        }
    }
}

module.exports = Reader