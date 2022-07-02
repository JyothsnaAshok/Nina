const router = require("express").Router();
const Stock = require("../../models/Stocks");

/**
 * @route PUT /api/stocks
 * @description Get list of stocks.
 * @access Public
 */
router.get("/", async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
