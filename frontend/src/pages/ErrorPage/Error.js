import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='container'>
      <h1>404 Error</h1>
      <h4>Page not available</h4>
      <br />
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default Error;
