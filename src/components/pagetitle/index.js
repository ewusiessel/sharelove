import React from "react";
import "./style.css";

const PageTitle = (props) => {
  return (
    <div className="tp-breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
