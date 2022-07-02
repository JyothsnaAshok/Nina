const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/Users");
const middleware = require("../../middleware/auth");
const multer = require("multer");
const uploads = multer({ dest: "uploads/" });
const {
    uploadImage,
    destroyImage,
} = require("../../utils/initialiseCloudinary");

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
        })
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
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" });
    }
});

/**
 * @route PUT /api/user
 * @description Update a user by id.
 * @access Private
 */
router.put("/", middleware, uploads.single("avatar"), async (req, res) => {
    const { name } = req.body;
    const avatar = req.file?.path;
    const updateData = { name, updatedAt: new Date() };
    try {
        const found = await User.findOne({ _id: req.user.id });
        if (!found) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        if (avatar) {
            if (found.avatar) {
                await destroyImage(found.avatar.public_id);
            }
            const { public_id, url } = await uploadImage(avatar);
            updateData.avatar = {
                public_id,
                url,
            };
        }
        found.name = updateData.name;
        found.updatedAt = updateData.updatedAt;
        if (updateData.avatar) {
            found.avatar = updateData.avatar;
        }
        await found.save();
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

/**
 * @route PUT /api/user/follow/:id
 * @description Follow a user by id.
 * @access Private
 */
router.put("/follow/:id", middleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        const follow = await User.findOne({ _id: req.params.id });
        if (!follow) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        if (req.user.id === follow.id) {
            return res
                .status(400)
                .json({ errors: [{ message: "You can't follow yourself" }] });
        }
        if (user.following.includes(follow._id)) {
            return res
                .status(400)
                .json({ errors: [{ message: "User already followed" }] });
        }
        user.following.push(follow._id);
        follow.followers.push(user._id);
        await user.save();
        await follow.save();
        res.status(200).json({
            message: "User has been successfully followed",
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server error");
    }
});

/**
 * @route PUT /api/user/unfollow/:id
 * @description Unfollow a user by id.
 * @access Private
 */
router.put("/unfollow/:id", middleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        const unfollow = await User.findOne({ _id: req.params.id });
        if (!unfollow) {
            return res
                .status(400)
                .json({ errors: [{ message: "User does not exist" }] });
        }
        if (req.user.id === unfollow.id) {
            return res
                .status(400)
                .json({ errors: [{ message: "You can't unfollow yourself" }] });
        }
        if (!user.following.includes(unfollow._id)) {
            return res
                .status(400)
                .json({ errors: [{ message: "User is not followed" }] });
        }
        user.following.splice(user.following.indexOf(unfollow._id), 1);
        unfollow.followers.splice(unfollow.followers.indexOf(user._id), 1);
        await user.save();
        await unfollow.save();
        res.status(200).json({
            message: "User has been successfully unfollowed",
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server error");
    }
});

module.exports = router;
