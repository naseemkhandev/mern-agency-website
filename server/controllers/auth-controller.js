const home = async (req, res) => {
	try {
		res.status(200).json("Hello from auth controllers");
	} catch (error) {
		res.status(404).json(error);
	}
};

const register = async (req, res) => {
	try {
		res.status(200).json(req.body);
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports = { home, register };
