const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    buyPrice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    ticker: {
        type: String,
        required: true,
    },
});

module.exports = Stock = mongoose.model("stock", StockSchema);
