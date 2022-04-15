import React from "react";
import { Link } from "react-router-dom";

//semantic ui
const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>TestShop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
