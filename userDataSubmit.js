const queryString = require("querystring");

function userDataSubmit(request, response) {
    let dataBody = [];
    request.on("data", chunk => {
        dataBody.push(chunk);
    });

    request.on("end", () => {
        const formData = Buffer.concat(dataBody).toString();
        let parsedData = queryString.parse(formData);
        let dataString = "My name is " + parsedData.name + " and my email is " + parsedData.email;
        console.log(dataString);
    });
    response.end(`<h1>You can get form data here</h1>`);
}

module.exports = userDataSubmit;