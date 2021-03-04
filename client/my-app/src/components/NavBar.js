import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

const NavBar = () => {
  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/clients'>Clients</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
