// create a server using http module

const http = require("http");

http.createServer((request, response) => {
// we can write html as string also
response.write("<h1>This is my first server</h1>");

// end is necessary to avoid loading in browser (even there is no content to write)
response.end("Hello");

// if we want to exit the process after response is sent, we can use process.exit() method
// process.exit();

}).listen(4800);