const { Comments } = require("../../models/");

class commentService {
  // get all comments by post ID
  static async getCommentsByPostId(postId) {
    try {
      return Comments.findAll({ where: { postId } });
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
  //Creating new comment
  static async createComment({ commentBody, postId }) {
    try {
      const commentCreated = await Comments.create({ commentBody, postId });
      return commentCreated;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
}

module.exports = { commentService };
