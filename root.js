const http = require("http");
const userForm = require("./userForm");
const userDataSubmit = require("./userDataSubmit");

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    if(request.url == "/"){
        userForm(request, response);
    }else if(request.url == "/submit"){
        userDataSubmit(request, response);
    }
    response.end();

}).listen(3200 );