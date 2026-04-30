const http = require("http");

const userData = [
    {
        name: "Basanta",
        age: 28,
        city: "Lalitpur",
        email: "basanta@test.com"
    },
    {
        name: "Bishal",
        age: 26,
        city: "Bhaktapur",
        email: "bishal@test.com"
    },
    {
        name: "Bibek",
        age: 29,
        city: "Kathmandu",
        email: "bibek@test.com"
    }
]

http.createServer((request, resp) => {
    resp.setHeader("Content-Type", "application/json");    
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(6100);