const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    fs.readFile("./html/web.html", "utf-8", (err, data) => {
        if(err){
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("<h1>Page Not Found</h1>");
            response.end();
            return;
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        }
        response.end();
    });
}).listen(4800);