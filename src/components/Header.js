import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  [btnName, setBtnName] = useState("login");

  const handleLogin = (btnName) => {
    setBtnName(btnName === "login" ? "logOut" : "login");
  };

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://i.etsystatic.com/21215114/r/il/d0c7bd/4104680841/il_fullxfull.4104680841_hxug.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => handleLogin(btnName)}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
