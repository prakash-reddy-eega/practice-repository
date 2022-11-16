const fs = require('fs')

fs.readFile('index.js', 'utf8', function(err, data){
    console.log('index.js file data:   ' + data)
})

fs.writeFile('index1.js', 'console.log("hello world")', function(err, data){
    console.log('data saved')
})