const { Router } = require("express");
const router = Router();

const {
	getDBInfo,
	getUsers,
	createUser,
} = require("../controllers/index.controller");

router.get("/", getDBInfo);
router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = router;
