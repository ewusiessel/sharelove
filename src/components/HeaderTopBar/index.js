import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

const HeaderTopbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <BsTelephone /> 0800 934 6779
                </li>
                <li>
                  <BsEnvelope /> sharelove@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
