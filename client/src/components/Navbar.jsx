import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="backToHome">
        Home
      </Link>
      <Link to="/createpost" className="createPost">
        Create A Post
      </Link>
    </div>
  );
};

export default Navbar;
