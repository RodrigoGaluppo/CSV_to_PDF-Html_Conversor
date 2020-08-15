
class Processor{
    static Process(data){
        let a = data.split("\r\n")
        let rows = []

        a.forEach(row => {
            rows.push(row.split(','))
        });

        return rows
    }
}

module.exports= Processor