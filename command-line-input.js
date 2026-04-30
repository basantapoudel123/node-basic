const http = require("http");
const arg = process.argv;

const port = arg[2];

// run this in terminal -> npx nodemon command-line-input.js 5600 

console.log("Arguments ---", arg[0], arg[1], arg[2]);   

http.createServer((request, response) => {
    response.write("<h1>This is my first server</h1>");
    response.end();
}).listen(port);
    

