import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo";
import "./style.css";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="about-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="about-img">
              <img src={props.AbImg} alt="" />
              <VideoModal />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
              <p></p>
              <p></p>
              <div className="btns">
                <div>
                  <Link
                    onClick={ClickHandler}
                    className="theme-btn"
                    to="/about"
                  >
                    More About Us..
                  </Link>
                </div>
              </div>
              <div className="signature">
                {/* <img src={} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
