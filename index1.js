var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.appendFile('test.txt','bhavani',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080,()=>{
    console.log("server running");
})