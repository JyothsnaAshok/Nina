const router = require("express").Router();
const Stock = require("../../models/Stocks");

router.get("/", async (req, res) => {
    try {
        const stocks = await Stock.find();
        console.log(stocks.length);
        res.json(stocks);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
