const Reader = require('./classes/Reader')
const Processor = require('./classes/Processor')
const Table = require('./classes/Table')
const HtmlParser = require('./classes/HtmlParser')
const Writer = require('./classes/Writer')
const PdfWriter = require('./classes/PDFWriter')

const reader = new Reader()
const writer = new Writer()

async function main(){
    let csv = await reader.Read('./users.csv')
    let rows = Processor.Process(csv)
    let users = new Table(rows)
    let html = await HtmlParser.Parse(users)
    let res  = await writer.Write('newHtml.html',html)
    
    PdfWriter.WritePdf('myPdf.pdf',html)

    if(res)
        console.log('done')
}

main()