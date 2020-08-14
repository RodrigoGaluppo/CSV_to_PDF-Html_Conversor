const pdf = require('html-pdf')
const fs = require('fs')
const util = require('util')

class PDFWiter{
    static WritePdf(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=>{
            console.log(err)
        })
    }
}

module.exports = PDFWiter