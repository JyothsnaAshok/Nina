const router = require("express").Router();
const Portfolio = require("../../models/Portfolios");
const User = require("../../models/Users");
const middleware = require("../../middleware/auth");

/**
 * @route POST /api/portfolio
 * @description Create a new portfolio.
 * @access Private
 */
router.post("/", middleware, async (req, res) => {
    const { name, description, stocks } = req.body;
    const userId = req.user.id;
    const userDetails = await User.findOne({ _id: userId });
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
        await User.findOneAndUpdate(
            { _id: userId },
            { portfolio: portfolio._id, updatedAt: Date.now() }
        );
        res.send(portfolio);
    } catch (err) {
        res.status(400).send(err);
    }
});

/**
 * @route GET /api/portfolio/:id
 * @description Get a portfolio by id.
 * @access Private
 */
router.get("/:id", middleware, async (req, res) => {
    const { id } = req.params;
    const portfolio = await Portfolio.findOne({ _id: id });
    if (!portfolio) {
        return res
            .status(400)
            .json({ errors: [{ message: "Portfolio does not exist" }] });
    }
    res.send(portfolio);
});

/**
 * @route PUT /api/portfolio/:id
 * @description Update a portfolio by id.
 * @access Private
 */
router.put("/:id", middleware, async (req, res) => {
    const { id } = req.params;
    const { name, description, stocks } = req.body;
    const portfolio = await Portfolio.findOne({ _id: id });
    if (!portfolio) {
        return res
            .status(400)
            .json({ errors: [{ message: "Portfolio does not exist" }] });
    }
    if (portfolio.user.toString() !== req.user.id) {
        return res.status(400).json({ errors: [{ message: "Unauthorized" }] });
    }
    if (name) {
        portfolio.name = name;
    }
    if (description) {
        portfolio.description = description;
    }
    if (stocks) {
        portfolio.stocks = stocks;
    }
    try {
        await portfolio.save();
        res.send(portfolio);
    } catch (err) {
        res.status(400).send(err);
    }
});

/**
 * @route PUT /api/portfolio/:id
 * @description Update a portfolio by id.
 * @access Private
 */
router.put("/:id", middleware, async (req, res) => {
    const { id } = req.params;
    const { name, description, stocks } = req.body;
    const portfolio = await Portfolio.findOne({ _id: id });
    if (!portfolio) {
        return res
            .status(400)
            .json({ errors: [{ message: "Portfolio does not exist" }] });
    }
    if (portfolio.user.toString() !== req.user.id) {
        return res.status(400).json({ errors: [{ message: "Unauthorized" }] });
    }
    if (name) {
        portfolio.name = name;
    }
    if (description) {
        portfolio.description = description;
    }
    if (stocks) {
        portfolio.stocks = stocks;
    }
    try {
        await portfolio.save();
        res.send(portfolio);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
