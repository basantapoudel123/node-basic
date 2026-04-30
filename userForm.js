function userForm(req, resp) {
    resp.write(
        `<form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter email"><br><br>
        <button>Submit</button>
        </form>`);
}

module.exports = userForm;