const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    image: {
        type: Object,
    },
    likedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            default: [],
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Feed = mongoose.model("feed", FeedSchema);
