const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    // collect header content
    let collectHeader = fs.readFileSync("html/header.html", "utf-8");
    let collectFooter = fs.readFileSync("html/footer.html", "utf-8");

    let file = "/home";
    if (request.url !== "/") {
        file = request.url;
    }

    if (request.url !== "/style.css") {
        fs.readFile("html" + file + ".html", "utf-8", (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.write("<h1>Page Not Found</h1>");
                return;
            }
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(collectHeader + data + collectFooter);
            response.end();
        })
    } else if (request.url == "/style.css") {
        fs.readFile("html/style.css", "utf-8", (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.write("CSS Not Found");
                return;
            }
            response.writeHead(200, { "Content-Type": "text/css" });
            response.write(data);
            response.end();
        })
    }
}).listen(3200);