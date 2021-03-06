import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../images/cause/img-1.png";
import causesimg2 from "../../images/cause/img-2.jpg";
import causesimg3 from "../../images/cause/img-3.jpg";
import "./style.css";

const Causes = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-12">
          <div className="section-title text-center">
            <div className="thumb-text"></div>
            <h2>Our Latest Causes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="cause-item">
              <div className="cause-img">
                <img src={causesimg} alt="" />
                <div className="case-btn"></div>
              </div>
              <h5 className="cause-donation-target">
                Donation: £12,00.00 / £1,36,600. 00
              </h5>
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="">
                    Financial Help for Families
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
                <Link onClick={ClickHandler} to="/donate" className="theme-btn">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-xs-12">
            <div className="cause-item">
              <div className="cause-img">
                <img src={causesimg2} alt="" />
                <div className="case-btn"></div>
              </div>
              <h5 className="cause-donation-target">
                Donation: £12,00.00 / £1,36,600.00
              </h5>
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="">
                    Education for Poor Children
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
                <Link onClick={ClickHandler} to="/donate" className="theme-btn">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-xs-12">
            <div className="cause-item">
              <div className="cause-img">
                <img src={causesimg3} alt="" />
                <div className="case-btn"></div>
              </div>
              <h5 className="cause-donation-target">
                Donation: £12,00.00 / £1,36,600.00
              </h5>
              <div className="cause-text">
                <h3>
                  <Link onClick={ClickHandler} to="">
                    Send Child to School
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
                <Link onClick={ClickHandler} to="/donate" className="theme-btn">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
