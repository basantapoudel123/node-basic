// create a server using http module

const http = require("http");

http.createServer((request, response) => {
// we can write html as string also
response.write("This is my first server");

// end is necessary to avoid loading in browser (even there is no content to write)
response.end("Hello");
}).listen(4800);