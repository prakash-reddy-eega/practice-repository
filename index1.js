const fs = require('fs');

const readFile = ()=> {
    return new Promise(function(resolve, reject) { 
        fs.readFile('marks.json', 'utf8', (err, data)=>{
            resolve(JSON.parse(data));
        });
    });
}

let index = 0

const main = async() => {
    const fileData = await readFile();
    const newFileData = fileData
    fileData.map( eachObj => {
        let total = 0
        let avg = 0
        let grade = ''
        eachObj['subjects'].map( eachItem => {
            let eachSubMarks = eachItem['marks']
            total += eachSubMarks
            
        })
        avg = (total/eachObj['subjects'].length).toFixed(1)
        if(avg >= 70.0){
            grade = "A"
        } else if (avg <= 39.0){
            grade = 'C'
        } else{
            grade = "B"
        }
        newFileData[index]['total'] = total
        newFileData[index]['avg'] = avg
        newFileData[index]['grade'] = grade
        index += 1
    })

    fs.writeFile('updateMarks.json', JSON.stringify(newFileData), (err, data) => {
        console.log('data updated')
    })
    
}

main();
