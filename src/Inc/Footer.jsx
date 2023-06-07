import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="footer_content">
            <ul>
              <li className="footer_info">About</li>
              <li>Contacts</li>
              <li>Policy</li>
              <li>Term & Conditios</li>
            </ul>
            <ul className="footer_social">
              <li>Tweeter</li>
              <li>Telegram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="footer_copyright_container">
          Copyright© 2022 All Right Reserve
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
