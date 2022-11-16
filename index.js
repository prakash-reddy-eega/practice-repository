const fs = require("fs");


function getTotalAvgGradesOfStudents(fileData){
    const newFileData = fileData
    let index = 0
    fileData.map( eachObj => {
        let total = 0
        let avg = 0
        let grade = ''
        eachObj['subjects'].map( eachItem => {
            let eachSubMarks = parseInt(eachItem['marks'])
            total += eachSubMarks
        })
        avg = (total/fileData[0]['subjects'].length-1).toFixed(1)
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
    return newFileData
}

function getDataInArraytype(headingsArr, updatedData){
    const dataInArr = [[...headingsArr,'total', 'avg', 'grade']]
    updatedData.map( eachIObj => {
        let temp = []
        temp.push(eachIObj['name'])
        eachIObj['subjects'].map( eachitem => {
            temp.push(eachitem['marks'])
        })
        temp.push(eachIObj['total'])
        temp.push(eachIObj['avg'])
        temp.push(eachIObj['grade'])
        dataInArr.push(temp)
    })
    const joinedArr = dataInArr.join("\n")
    return joinedArr
}

function writeFileToCsvFile(newData){
    fs.writeFile('updateMarks.csv', newData, (err, data) => {
        console.log('data updated')
    })
}

const readFile = () => {
    fs.readFile('marks.csv', 'utf-8', (err, data) => {
        const marksArr  = data.split('\n')
        const headingsArr = marksArr[0].split(',')
        const tempArr = []
        for (let i = 1; i <= marksArr.length-1; i++){
            const studntDetails = marksArr[i].split(',')
            const studentObj = {
                'name': studntDetails[0],
                'subjects': []
            }
            for(let j = 1; j <= headingsArr.length-1; j++){
                    const marksobj = {
                        'sub': headingsArr[j],
                        'marks': studntDetails[j]
                    }
                    studentObj['subjects'].push(marksobj)
            }
            tempArr.push(studentObj)
        }

        const updatedData = getTotalAvgGradesOfStudents(tempArr)
        const dataInArraytype = getDataInArraytype(headingsArr, updatedData)
        const writeFileCsv = writeFileToCsvFile(dataInArraytype)
        
    })
}





readFile()