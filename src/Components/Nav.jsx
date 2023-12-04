import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1>Bookmarks App</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/bookmarks"} className="nav">
            Bookmarks
          </Link>
        </li>
        <li>
          <Link to={"/bookmark/new"} className="nav">
            Create Bookmark
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
