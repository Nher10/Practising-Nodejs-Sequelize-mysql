const { commentService } = require("../services/comment.service");

class commentController {
  // get all comments by post ID
  static async getCommentsByPostId(req, res) {
    try {
      const { postId } = req.params;
      const comments = await commentService.getCommentsByPostId(postId);
      res.json(comments);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Comments not found" });
    }
  }
  //Creating Comment
  static async createComment(req, res) {
    try {
      const { commentBody, postId } = req.body;
      const comment = await commentService.createComment({
        commentBody,
        postId,
      });
      res.json(comment);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "error creating comment" });
    }
  }
}

module.exports = { commentController };
