const { Router } = require("express");
const router = Router();

const info = require("../controllers/index.controller");
const users = require("../controllers/users.controller");

router.get("/", info.infoAPI);

// GET all users
router.get("/users", users.getAll, users.getByID);
// GET user by ID
router.get("/users/:id", users.getByID);
// CREATE a new user
router.post("/users", users.create);
// UPDATE a user by ID
router.put("/users/:id", users.update);
// DELETE a user by ID
router.delete("/users/:id", users.delete);

module.exports = router;
