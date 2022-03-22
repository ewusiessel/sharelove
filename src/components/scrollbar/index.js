import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css";
import { HiArrowSmUp } from "react-icons/hi";

const Scrollbar = () => {
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <AnchorLink href="#scrool">
              <HiArrowSmUp size={30} />
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
