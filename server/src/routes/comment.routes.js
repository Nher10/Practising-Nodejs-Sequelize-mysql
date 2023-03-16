const express = require("express");
const { commentController } = require("../controllers/comment.controller");
const router = express.Router();

router.get("/:postId", commentController.getCommentsByPostId);
router.post("/", commentController.createComment);

module.exports = router;
