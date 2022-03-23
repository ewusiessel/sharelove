import React from "react";
import { RiMedicineBottleLine } from "react-icons/ri";
import { MdOutlineSchool, MdOutlineHouse } from "react-icons/md";
import "./style.css";

const Features = (props) => {
  return (
    <div className={`features-area ${props.Features}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-item-2">
              <div className="features-icon">
                <i className="ri">
                  <RiMedicineBottleLine size={45} />
                </i>
              </div>
              <div className="features-content">
                <p>Medicine</p>
                <h3>Medical Access</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-item-2">
              <div className="features-icon">
                <i className="ri">
                  <MdOutlineSchool size={45} />
                </i>
              </div>
              <div className="features-content">
                <p>Basic Education</p>
                <h3>Education</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-item-2">
              <div className="features-icon">
                <i className="ri">
                  <MdOutlineHouse size={45} />
                </i>
              </div>
              <div className="features-content">
                <p> Housing Facilities</p>
                <h3>Shelter</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
