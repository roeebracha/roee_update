const express = require("express");
const { getUsers } = require("../controllers/usersController");
const { guard } = require("../middleware/guard");

const router = express.Router();

router.get("/", guard, getUsers);

module.exports = router;
