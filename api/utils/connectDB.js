const mongoose = require("mongoose");
require("dotenv").config();

// Establishing connection to Database
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            maxPoolSize: 10,
        });
        console.log(`mongoDB connected ...`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
