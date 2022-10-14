var http =require('http');
http.createServer(function(req,res){
    res.write(req.url);
    res.end();
}).listen(5050,console.log("server running"));