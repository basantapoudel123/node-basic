const http = require("http");

const environment = "VS Code";
const server = http.createServer((req, resp) => {
    // resp.setHeader("Content-Type", "text/json");
    resp.setHeader("Content-Type", "text/html");
    resp.write(`
        <html>
        <head>
            <title>My First Server</title>
        </head>
        <body>
            <h1>This is my first server</h1>
            <p>I run this server from ${environment}</p>
            <h2>`+environment+`</h2>
        </body>
        </html>
        `);
    resp.end();
})

server.listen(4800);