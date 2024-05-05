import React from "react";
import { FaSignInAlt, FaUser, FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <ul>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
        </Link>
        <Link to="/login">
          {" "}
          <FaSignInAlt />
        </Link>
        <Link to="/register">
          {" "}
          <FaUser />
        </Link>
        <Link to="/contact">
          {" "}
          <FaAddressBook />
        </Link>
      </ul>
    </header>
  );
}

export default Header;
