import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/post/${id}`).then((res) => {
      setPostObject(res.data);
    });

    axios.get(`http://localhost:3001/api/comment/${id}`).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input type="text" placeholder="Comment..." autoComplete="off" />
          <button>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment) => {
            return (
              <div className="comment" key={comment.id}>
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
