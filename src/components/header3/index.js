import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import HeaderTopbar from "../HeaderTopbar";
import MobileMenu from "../MobileMenu";

const Header3 = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="middle-header s2">
      <HeaderTopbar />
      <div className="header-style-3">
        <div className="container">
          <div className="header-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div className="logo">
                  <Link onClick={ClickHandler} to="/home" title="">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 d-lg-block d-none">
                <nav>
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/home" title="">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about" title="">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/case" title="">
                        Causes
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/event" title="">
                        Event
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact" title="">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                <div className="contact">
                  <div className="cart-search-contact">
                    <div className="header-search-form-wrapper">
                      <button className="search-toggle-btn">
                        <i className="fi flaticon-magnifying-glass"></i>
                      </button>
                      <div className="header-search-form">
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="ti-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <MobileMenu />
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header3;
