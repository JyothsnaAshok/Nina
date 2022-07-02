const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../../models/Users");
const middleware = require("../../middleware/auth");

/**
 * @route POST /api/auth
 * @description Get user details from token.
 * @access Private
 */
router.get("/", middleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select("-password")
            .populate({
                path: "followers",
                select: ["name", "avatar"],
            })
            .populate({
                path: "following",
                select: ["name", "avatar"],
            });
        if (!user) {
            return res
                .status(404)
                .json({ errors: [{ message: "User not found" }] });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

/**
 * @route POST /api/auth/login
 * @description Login user and return token.
 * @access Public
 */
router.post("/login", async (req, res) => {
    const jwtSecret = process.env.SECRET;
    const { email, password } = req.body;
    try {
        // if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res
                .status(403)
                .json({ errors: [{ message: "Invalid Credentials" }] });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(403)
                .json({ errors: [{ message: "Invalid Credentials" }] });
        }

        // Return Json Token
        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(payload, jwtSecret, { expiresIn: 360000 });
        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error");
    }
});

/**
 * @route POST /api/auth/change-password
 * @description Change user password.
 * @access Public
 */
router.put("/change-password", middleware, async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res
                .status(404)
                .json({ errors: [{ message: "User not found" }] });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res
                .status(403)
                .json({ errors: [{ message: "Invalid Credentials" }] });
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();
        res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error");
    }
});

module.exports = router;
