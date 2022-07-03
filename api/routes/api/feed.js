const router = require("express").Router();
const Feed = require("../../models/Feeds");
const User = require("../../models/Users");
const multer = require("multer");
const middleware = require("../../middleware/auth");
const uploads = multer({ dest: "uploads/" });
const { uploadImage } = require("../../utils/initialiseCloudinary");

/**
 * @route   POST api/feed/
 * @description Create a new feed
 * @access  Private
 */
router.post("/", middleware, uploads.single("image"), async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.user.id;
        const userDetails = await User.findById(userId);
        if (!userDetails) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        const feed = new Feed({
            text,
            user: userId,
        });
        const image = req.file?.path;
        if (image) {
            const { public_id, url } = await uploadImage(image);
            feed.image = {
                public_id,
                url,
            };
        }
        await feed.save();
        res.send(feed);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

/**
 * @route   GET api/feed/
 * @description Get all feeds
 * @access  Private
 */
router.get("/", middleware, async (req, res) => {
    try {
        const feeds = await Feed.find({})
            .populate("user")
            .sort({ createdAt: -1 });
        const user = await User.findById(req.user.id);
        let response = [];
        feeds.forEach((feed) => {
            let likedByUser = false;
            let followedByUser = false;
            if (feed.likedBy.includes(req.user.id)) {
                likedByUser = true;
            }
            if (user.following.includes(feed.user.id)) {
                followedByUser = true;
            }
            response.push({ ...feed._doc, likedByUser, followedByUser });
        });
        if (req.query.filter) {
            if (req.query.filter === "likes:desc") {
                response.sort((a, b) => {
                    return b.likedBy.length - a.likedBy.length;
                });
            } else if (req.query.filter === "likes:asc") {
                response.sort((a, b) => {
                    return a.likedBy.length - b.likedBy.length;
                });
            } else if (req.query.filter === "following") {
                const followingList = user.following;
                response = response.filter((feed) => {
                    return followingList.includes(feed.user._id);
                });
            }
        }
        if (response.length === 0) {
            return res.status(200).json({
                message: "No feeds for selected Criteria",
            });
        }
        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

/**
 * @route   PUT api/feed/like/:id
 * @description Like a feed
 * @access  Private
 */
router.put("/like/:id", middleware, async (req, res) => {
    try {
        const feedId = req.params.id;
        const userId = req.user.id;
        const feed = await Feed.findOne({ _id: feedId });
        if (!feed) {
            return res.status(400).json({
                message: "Feed not found",
            });
        }
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        if (feed.likedBy.includes(userId)) {
            return res.status(400).json({
                message: "Already liked",
            });
        }
        feed.likedBy.push(userId);
        await feed.save();
        res.send(feed);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

/**
 * @route   PUT api/feed/unlike/:id
 * @description Unlike a feed
 * @access  Private
 */
router.put("/unlike/:id", middleware, async (req, res) => {
    try {
        const feedId = req.params.id;
        const userId = req.user.id;
        const feed = await Feed.findOne({ _id: feedId });
        if (!feed) {
            return res.status(400).json({
                message: "Feed not found",
            });
        }
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        if (!feed.likedBy.includes(userId)) {
            return res.status(400).json({
                message: "Not liked",
            });
        }
        feed.likedBy.splice(feed.likedBy.indexOf(userId), 1);
        await feed.save();
        res.send(feed);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;
