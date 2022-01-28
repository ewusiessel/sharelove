import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo";
import "./style.css";
import abimg2 from "../../images/img-1.png";

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
              <p>
                Sharelove has a long history of taking action that transforms
                the world. Our focus is on helping the most vulnerable children,
                in the most difficult places, overcome poverty and experience
                fullness of life. Together, with supporters like you, we’ve
                helped millions of children and families out of poverty and we
                are often first on the ground when a crisis strikes.
              </p>
              <p>Focusing on the most vulnerable.</p>
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
                <img src={abimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
