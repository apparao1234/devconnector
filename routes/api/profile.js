const express = require("express");
const router = express.Router();
// @route    GET api/profile
// @desc     Get user by token
// @access   Public

router.get("/", (req, res) => res.send("profile route"));

module.exports = router;
