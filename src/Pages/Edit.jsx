/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import EditBookmarkForm from "../Components/EditBookmarkForm";

const Edit = () => {
  return (
    <div>
      <EditBookmarkForm />
      <button>
        <Link to="/bookmarks">Back</Link>
      </button>
    </div>
  );
};

export default Edit;
