const router = require("express").Router();
const Portfolio = require("../../models/Portfolios");
const User = require("../../models/Users");
const middleware = require("../../middleware/auth");

router.post("/", middleware, async (req, res) => {
    const { name, description, stocks } = req.body;
    const userId = req.user.id;
    const userDetails = await User.findOne({ _id: userId });
    console.log(userDetails);
    if (!userDetails) {
        return res
            .status(400)
            .json({ errors: [{ message: "User does not exist" }] });
    }
    if (userDetails.portfolio) {
        return res
            .status(400)
            .json({ errors: [{ message: "User already has a portfolio" }] });
    }
    const portfolio = new Portfolio({
        name,
        description,
        stocks,
        user: userId,
    });
    try {
        await portfolio.save();
        res.send(portfolio);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
