const express = require("express");
const app = express();

const PORT = 5000 || process.env.PORT;

const authRouter = require("./router/auth-router");

app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server is Running at Port: ${PORT}`));
