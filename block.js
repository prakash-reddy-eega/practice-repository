const fs = require('fs');
   
const filepath = 'text.txt';
  
const data = fs.readFileSync('test.js', {encoding: 'utf8'});
  
console.log(data);
  
let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum + i;
}
  
console.log('Sum: ', sum);