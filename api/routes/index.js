const router = require("express").Router();

router.use("/auth", require("./api/auth"));
router.use("/user", require("./api/user"));

module.exports = router;
