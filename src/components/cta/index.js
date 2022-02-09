import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CtaSection = (props) => {
  return (
    <div className="tp-cta-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-cta-text">
              <h2>You Can Help The Poor With Us</h2>
              <p>
                You can help us reach more vulnerable children with your
                donations. Please donate today and help us protect children in
                poor communities across the world.
              </p>
              <div className="btns">
                <Link to="/donate" className="theme-btn">
                  Donate Now
                </Link>
                <Link to="/volunteer" className="theme-btn-s2">
                  Join Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
