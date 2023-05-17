import React from "react";
import {Link} from "react-router-dom";

const Idea = () => {
  return (
    <div className="landing-content-area">
      <div className="error-top-container">
        <div className="error-top-text">
            <h1>404 Error:</h1>
            <h2>Oops, you caught us off guard!</h2>
            <h3>The page that you are looking for does not exist.</h3>
            <h3>If you want to return to the home page:</h3>
            <Link to='/' className="error-link-text">Click Here!</Link>
        </div>
      </div>
    </div>
  );
};
  
export default Idea;