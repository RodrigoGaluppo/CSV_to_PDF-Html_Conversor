const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PdfWriter = require('./PDFWriter')

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