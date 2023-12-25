const express = require("express");
const app = express();

const PORT = 5000 || process.env.PORT;

app.get("/", (req, res) => {
	res.send("<h1>Backend is Running...</h1>");
});

app.get("/register", (req, res) => {
	res.send("Welcome to Registration Page!!");
});

app.listen(PORT, () => console.log(`Server is Running at Port: ${PORT}`));
