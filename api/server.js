const express = require("express");
const app = express();
const connectDB = require("./utils/connectDB");
require("dotenv").config();

// Connect to MongoDB
connectDB();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json({ extended: false }));

app.use("/api", require("./routes"));

app.get("/test", (req, res) => {
    res.status(200).send({ message: "Backend APIs running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
