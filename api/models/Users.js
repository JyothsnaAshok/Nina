const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    portfolio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "portfolio",
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

module.exports = User = mongoose.model("user", UserSchema);
