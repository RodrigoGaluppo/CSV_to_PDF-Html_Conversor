const fs = require('fs')
const util = require('util')

class Writer{
    constructor(){
        this.write = util.promisify(fs.writeFile)
    }

    async Write(filename,data){
        try{
            await this.write(filename,data)
            return true
        }catch(e){
            console.log(e)
            return null
        }
    }
}

module.exports=Writer