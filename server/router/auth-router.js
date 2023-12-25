const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => res.status(200).send("Hello from router"));

router
	.route("/register")
	.get((req, res) => res.status(200).send("Hello from register router"));

module.exports = router;
