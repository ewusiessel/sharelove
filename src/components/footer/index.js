import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/logo.png";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="tp-ne-footer">
      <div className="tp-site-footer">
        <div className="tp-upper-footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="widget about-widget">
                  <div className="logo widget-title">
                    <img src={Logo} alt="" />
                  </div>
                  <p>
                    Our integrated approach includes water, healthcare,
                    education, child protection, and income generation.{" "}
                  </p>
                  <ul>
                    <li>
                      <div className="parallax-wrap">
                        <div className="parallax-element">
                          <Link onClick={ClickHandler} to="/">
                            <i className="ti-facebook"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="parallax-wrap">
                        <div className="parallax-element">
                          <Link onClick={ClickHandler} to="/">
                            <i className="ti-twitter-alt"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="parallax-wrap">
                        <div className="parallax-element">
                          <Link onClick={ClickHandler} to="/">
                            <i className="ti-instagram"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="parallax-wrap">
                        <div className="parallax-element">
                          <Link onClick={ClickHandler} to="/">
                            <i className="ti-google"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/case">
                        Our Causes
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/donate">
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/event">
                        Our Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                <div className="widget market-widget tp-service-link-widget">
                  <div className="widget-title">
                    <h3>Contact </h3>
                  </div>
                  <p>
                    We'd love to hear from you. We have different ways to get in
                    touch.
                  </p>
                  <div className="contact-ft">
                    <ul>
                      <li>
                        <i className="fi flaticon-pin"></i>10 Westminster
                        Street, London
                      </li>
                      <li>
                        <i className="fi flaticon-call"></i>0800 934 6779
                      </li>
                      <li>
                        <i className="fi flaticon-envelope"></i>
                        sharelove@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-lower-footer">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <p className="copyright">
                  &copy; 2021 sharelove. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
