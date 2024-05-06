// import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="form-container">
      <a
        href="https://www.facebook.com"
        style={{ color: "#3b5998", marginRight: "10px" }}
      >
        <FaFacebook style={{ fontSize: "30px" }} />
      </a>
      <a
        href="https://www.instagram.com"
        style={{ color: "#e4405f", marginRight: "10px" }}
      >
        <FaInstagram style={{ fontSize: "30px" }} />
      </a>
      <a
        href="https://twitter.com"
        style={{ color: "#1da1f2", marginRight: "10px" }}
      >
        <FaTwitter style={{ fontSize: "30px" }} />
      </a>
      <a
        href="https://www.youtube.com"
        style={{ color: "#c4302b", marginRight: "10px" }}
      >
        <FaYoutube style={{ fontSize: "30px" }} />
      </a>
      <a
        href="https://github.com"
        style={{ color: "#333", marginRight: "10px" }}
      >
        <FaGithub style={{ fontSize: "30px" }} />
      </a>
      <a href="https://www.google.com" style={{ color: "#4285f4" }}>
        <FaGoogle style={{ fontSize: "30px" }} />
      </a>
    </div>
  );
}

export default Footer;
