import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 error</h2>
      <Link to="/">
        <button> Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
