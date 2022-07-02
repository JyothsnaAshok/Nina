const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    ticker: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = Stock = mongoose.model("stock", StockSchema);
