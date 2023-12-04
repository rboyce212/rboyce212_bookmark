import React from "react";
import { Link } from "react-router-dom";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bookmarks" key={bookmark.id}>
      <Link to={`/bookmarks/${bookmark.id}`}>{bookmark.name}</Link>
    </div>
  );
};

export default Bookmark;
