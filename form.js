const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http.createServer((request, response) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
        if(err){
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end("Internal Server Error");
            return;
        } 

        response.writeHead(200, {"Content-Type": "text/html"});
        if(request.url == "/"){
            response.write(data);
            response.end();
        }else if(request.url == "/submit"){
            // get submited form data
            let dataBody = [];
            request.on("data", chunk => {
                dataBody.push(chunk);
            });

                    request.on("end", () => {
                        const formData = Buffer.concat(dataBody).toString();
                        let parsedData = queryString.parse(formData);
                        let dataString = "My name is " + parsedData.name + " and my email is " + parsedData.email;
                        console.log(dataString);

                        // creating text file synchronously
                        // fs.writeFileSync("text/" + parsedData.name + ".txt", dataString);
                        // console.log("File created successfully");

                        // creating text file asynchronously
                        fs.writeFile("text/" + parsedData.name + ".txt", dataString, (err) => {
                            if(err){
                                response.end("Internal Server Error");
                                return false;
                            }else{
                                console.log("File created successfully");
                            }
                        })

                        response.end(`
                            <h1>Form Submitted</h1>
                            <p>Name: ${parsedData.name}</p>
                            <p>Email: ${parsedData.email}</p>
                        `);
                    });
            
        } else {
            response.write("<h1>Page Not Found</h1>");
            response.end();
        }
    });
}).listen(3200);

// http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     console.log(request.url)

//     if(request.url == "/"){
//         response.write(`
//             <form action="/submit" method="post">
//                 <label for="name">Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter name"><br><br>
//                 <label for="email">Email:</label>
//                 <input type="email" id="email" name="email" placeholder="Enter email"><br><br>
//                 <button>Submit</button>
//             </form>`);
//     }else if(request.url == "/submit"){
//         response.write("<h1>Form Submitted</h1>");
//     } else {
//         response.write("<h1>Page Not Found</h1>");
//     }

//     response.end();
// }).listen(3200);