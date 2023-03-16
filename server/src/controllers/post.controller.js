const { postService } = require("../services/post.service");

class postController {
  //getting all posts
  static async getAllPosts(_req, res) {
    try {
      const post = await postService.getAllPosts();
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Posts not found" });
    }
  }
  //get post bu Id
  static async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await postService.getPostById(id);
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Post not found" });
    }
  }
  //Creating Post
  static async createPost(req, res) {
    try {
      const { title, postText, username } = req.body;
      const post = await postService.createPost({
        title,
        postText,
        username,
      });
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "error creating post" });
    }
  }
}

module.exports = { postController };
