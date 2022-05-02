import React from "react";
import { Link } from "react-router-dom";

import "./Nav.styles.css";

// Components
import Toggle from "../Toggle/Toggle";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <Toggle />
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/counter'>Counter</Link>
          <Link to='/trains'>Trains</Link>
          <Link to='/list'>To Go List</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
