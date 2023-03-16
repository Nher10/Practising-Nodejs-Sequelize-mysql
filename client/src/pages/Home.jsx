import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [Posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/post").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      {Posts.map((post) => {
        return (
          <div
            className="post"
            key={post.id}
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            <div className="title"> {post.title}</div>
            <div className="body"> {post.postText}</div>
            <div className="footer"> {post.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
