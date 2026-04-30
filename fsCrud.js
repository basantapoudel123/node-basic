const fs = require("fs");

// // create file and write content to it
// fs.writeFileSync("files/banana.txt", "This is my favourite fruit");

// // delete file
// // fs.unlinkSync("files/apple.txt");

// // read file content
// const data = fs.readFileSync("files/banana.txt", "utf-8");
// console.log("File content: " + data);


// // update file content
// fs.appendFileSync("files/banana.txt", "\nI like to eat it in the morning");
// console.log("File updated successfully");

const operation = process.argv[2];

if (operation === "write") {
    const fileName = process.argv[3];
    const content = process.argv[4];
    const filePath = "files/" + fileName + ".txt";
    fs.writeFileSync(filePath, content);
    console.log("File created successfully");

} else if (operation === "delete") {
    const fileName = process.argv[3];
    const filePath = "files/" + fileName + ".txt";
    fs.unlinkSync(filePath);
    console.log("File deleted successfully");

} else if (operation === "read") {
    const fileName = process.argv[3];
    const filePath = "files/" + fileName + ".txt";
    const data = fs.readFileSync(filePath, "utf-8");
    console.log("File content: " + data);

} else if (operation === "update") {
    const fileName = process.argv[3];
    const content = process.argv[4];
    const filePath = "files/" + fileName + ".txt";
    fs.appendFileSync(filePath, "\n" + content);
    console.log("File updated successfully");

} else {
    console.log("Operation not found!!");
}