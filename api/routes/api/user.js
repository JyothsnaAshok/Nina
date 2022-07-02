const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/Users");
const middleware = require("../../middleware/auth");

/**
 * @route POST /api/user
 * @description Create a new user.
 * @access Public
 */
router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ message: "User already exists" }] });
        }
        user = new User({
            name,
            email,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err.message);
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

/**
 * @route GET /api/user/:id
 * @description Get a user by id.
 * @access Private
 */
router.get("/:id", middleware, async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.id,
        }).select("-password");
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" });
    }
});

/**
 * @route PUT /api/user/:id
 * @description Update a user by id.
 * @access Private
 */
router.put("/:id", middleware, async (req, res) => {
    const { name } = req.body;
    const updateData = { name, updatedAt: new Date() };
    try {
        const found = await User.findOneAndUpdate(
            { _id: req.params.id },
            updateData
        ).select("-password");
        if (found == null) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        found.name = updateData.name;
        found.updatedAt = updateData.updatedAt;
        res.status(200).json({
            message: "User has been successfully updated",
            data: found,
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server error");
    }
});

/**
 * @route DELETE /api/user/:id
 * @description Delete a user by id.
 * @access Private
 */
router.delete("/:id", middleware, async (req, res) => {
    try {
        let found = await User.findOneAndDelete({ _id: req.params.id });
        if (found == null) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        res.status(200).json({ message: "User has been successfully deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server error");
    }
});

module.exports = router;
