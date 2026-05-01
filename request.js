const http = require("http");

http.createServer((request, response) => {
    console.log("Request", request.url, request.headers, request.method)

    if (request.url == "/home") {
        response.write("<h1>This is home page</h1>");

    } else if (request.url == "/about") {
        response.write("<h1>This is about page</h1>");

    } else if (request.url == "/contact") {
        response.write("<h1>This is contact page</h1>");
         
    } else {
        response.write("<h1>Other Page</h1>");
    }
    response.end();
}).listen(5600);