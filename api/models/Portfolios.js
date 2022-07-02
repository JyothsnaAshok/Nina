const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    stocks: [
        {
            type: Object,
            required: true,
        },
    ],
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});

module.exports = Portfolio = mongoose.model("portfolio", PortfolioSchema);
