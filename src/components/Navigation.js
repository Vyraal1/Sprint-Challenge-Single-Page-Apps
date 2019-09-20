import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">Welcome</Link>
      </div>
      <div>
        <Link to="/Characters">Characters</Link>
      </div>
    </div>
  );
};

export default Navigation;
