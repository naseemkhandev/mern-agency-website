import app from "./src/app.js";

const startServer = async () => {
  try {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
