import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../images/cause/img-1.png";
import causesimg2 from "../../images/cause/img-2.jpg";
import causesimg3 from "../../images/cause/img-3.jpg";
import "./style.css";

// NOTE: imgs removed

const Causes = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <div className="thumb-text">
              <span>CAUSES</span>
            </div>
            <h2>Latest Causes of ShareLove.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={causesimg} alt="" />
                  <div className="case-btn">
                    <Link
                      onClick={ClickHandler}
                      to="/donate"
                      className="theme-btn"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Financial Help for Families
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={causesimg2} alt="" />
                  <div className="case-btn">
                    <Link
                      onClick={ClickHandler}
                      to="/donate"
                      className="theme-btn"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cause-text">
                <ul></ul>
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Education for Poor Children
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={causesimg3} alt="" />
                  <div className="case-btn">
                    <Link
                      onClick={ClickHandler}
                      to="/donate"
                      className="theme-btn"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="/case-single">
                    Send Child to School for a Year
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
