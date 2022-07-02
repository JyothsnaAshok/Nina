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

router.get("/live/:ticker", async (req, res) => {
    try {
        const stock = await Stock.findOne({ ticker: req.params.ticker });
        const sign = Math.random() < 0.5 ? -1 : 1;
        const randomFluctuation = Math.random() * 5;
        const newPrice = stock.price + sign * randomFluctuation;
        res.json({
            ticker: stock.ticker,
            name: stock.name,
            livePrice: Number(newPrice.toFixed(2)),
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
