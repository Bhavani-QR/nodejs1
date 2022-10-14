var http = require('http');
http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
}).listen(9000,console.log("server running"));