const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectToDB = async () => {
	try {
		await mongoose.connect(URI);
		console.log("Database connection Successful!!");
	} catch (error) {
		console.error("Database connection failed!! " + error);
		process.exit(0);
	}
};

module.exports = connectToDB;
