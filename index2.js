var url = require('url');
var web = "http://localhost:3000/index2.html?name=Bhavani&age=19";
var part = url.parse(web,true);
console.log(part.query);
