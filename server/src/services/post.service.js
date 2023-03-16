const { Posts } = require("../../models/");

class postService {
  //getting all posts
  static async getAllPosts() {
    try {
      return Posts.findAll({ include: "Comments" });
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
  //getting post by Id
  static async getPostById(id) {
    try {
      return Posts.findOne({ where: { id }, include: "Comments" });
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
  //Creating new post
  static async createPost({ title, postText, username }) {
    try {
      const postCreated = await Posts.create({ title, postText, username });
      return postCreated;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
}

module.exports = { postService };
