const router = require("express").Router();

router.use("/auth", require("./api/auth"));
router.use("/user", require("./api/user"));
router.use("/portfolio", require("./api/portfolio"));
router.use("/feed", require("./api/feed"));
router.use("/stocks", require("./api/stock"));

module.exports = router;
