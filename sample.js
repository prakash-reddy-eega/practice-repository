const {sum, multiplicaiton} = require('./index.js')
let fs = require('fs')

fs.unlink('index1.js',function(err, data){
    console.log('deltedd')
})