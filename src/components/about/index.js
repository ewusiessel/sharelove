import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo";
import "./style.css";
import abimg2 from "../../images/img-1.png";
// import worldmap from "../images/about/world-map.png";

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
                Est consequat nostrud elit est eu labore aliquip ad proident
                fugiat labore. Incididunt ea do qui consequat nulla cupidatat
                laboris minim commodo reprehenderit. Consectetur laboris veniam
                adipisicing id elit cillum exercitation. Consequat proident
                ullamco incididunt amet.
              </p>
              <p>Enim velit pariatur amet ullamco exercitation.</p>
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
