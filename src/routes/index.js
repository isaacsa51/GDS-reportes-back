const { Router } = require("express");
const router = Router();

const info = require("../controllers/index.controller");
const users = require("../controllers/users.controller");
const companies = require("../controllers/companies.controller");
const comments = require("../controllers/comments.controller");
const reports = require("../controllers/reports.controller");

// ** BASIC INFO FROM THE API **
router.get("/", info.infoAPI);

// ** USERS **
// GET all users
router.get("/users", users.getAll);
// GET user by ID
router.get("/users/:id", users.getByID);
// CREATE a new user
router.post("/users", users.create);
// UPDATE a user by ID
router.put("/users/:id", users.update);
// DELETE a user by ID
router.delete("/users/:id", users.delete);

// ** COMPANIES **
// Get all companies
router.get("/companies", companies.getAll);
// GET company by ID
router.get("/companies/:id", companies.getByID);
// CREATE a new company
router.post("/companies", companies.create);
// UPDATE a company by ID
router.put("/companies/:id", companies.updateInfo);
// UPDATE password company
router.put("/companies/:id", companies.changePassword);
// DELETE a user by ID
router.delete("/companies/:id", companies.delete);

// ** REPORTS **
// GET all reports
router.get("/reports", reports.getAll);
// GET report by ID
router.get("/reports/:id", reports.getByID);
// CREATE a new report
router.post("/reports", reports.create);
// UPDATE a status from a report by ID
//router.put("/reports/:id", reports.update);
// DELETE a report by ID
router.delete("/reports/:id", reports.delete);

// ** COMMENTS **
// GET all comments
router.get("/comments", comments.getAll);
// POST a new comment
router.post("/comments", comments.create);
// DELETE a comment via ID
router.delete("/comments", comments.delete);

module.exports = router;
