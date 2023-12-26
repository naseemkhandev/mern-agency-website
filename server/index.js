const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.use(express.json());
dotenv.config();
const PORT = 5000 || process.env.PORT;

const connectToDB = require("./db");
const authRouter = require("./router/auth-router");

app.use("/api/auth", authRouter);

connectToDB().then(() => {
	app.listen(PORT, () => console.log(`Server is Running at Port: ${PORT}`));
});
