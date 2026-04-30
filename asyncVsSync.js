const fs = require("fs");

fs.readFile("text/basanta.txt", "utf-8", (err, data) => {
    if(err){
        return false;
    } else {
        console.log("File content: " + data);
    }
});

console.log("End script")