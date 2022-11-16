const http = require('http')
const server = http.createServer( (req, res) => {
    console.log("kkkkkkkkkkkkkkkkkkkkkk");
    if (req.url === '/'){
        console.log("HHHHHHHHHHHHHHHHHHHHH");
        res.write('hello world');
        res.end();
    }
})
server.listen(3000)
console.log('listening on port 3000')