import React from "react";
import blog1 from "../../images/blog/1.jpg";
import blog2 from "../../images/blog/2.jpg";
import blog3 from "../../images/blog/3.jpg";
import blog4 from "../../images/blog/7.jpg";
import { Link } from "react-router-dom";
import "./style.css";

const BlogSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="blog-section section-padding">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>Latest News</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="blog-grids clearfix">
              <div className="grid">
                <div className="entry-media">
                  <img src={blog1} alt="" />
                </div>
                <div className="details">
                  <h3>
                    Recycling plastic bottles leach chemicals into drinking
                    water.
                  </h3>
                  <p>
                    Researchers from Brunel University London found 150
                    chemicals that leached into drinks from plastic bottles,
                    with 18 of those chemicals found in levels exceeding
                    regulations. And they found that drinks bottled using
                    recycled Polyethylene Terephthalate (PET) can contained
                    higher concentrations of chemicals than those bottled using
                    new PET, which suggests that problems with the recycling
                    process may be causing contamination.
                  </p>
                  <ul className="entry-meta">
                    <li>
                      <img src={blog4} alt="" />
                      By{" "}
                      <Link onClick={ClickHandler} to="/blog-single">
                        Lily Anne
                      </Link>
                    </li>
                    <li>Feb 12,2021</li>
                  </ul>
                </div>
              </div>
              <div className="grid">
                <div className="entry-media">
                  <img src={blog2} alt="" />
                </div>
                <div className="details">
                  <h3>The Importance of Building a Well.</h3>
                  <p>
                    Reliable access to safe, clean water means that drinking,
                    cooking, washing, watering crops and animals no longer pose
                    a risk of illness. It also means that women and children
                    don’t have to walk for miles to collect often dirty water.
                    The average distance that women and children walk to collect
                    water in Africa and Asia is 3.7 miles, carrying around 20
                    litres of water. A simple well gives the less fortunate a
                    chance to break free from poverty and transform their lives
                    for years to come.
                  </p>
                  <ul className="entry-meta">
                    <li>
                      <img src={blog4} alt="" />
                      By{" "}
                      <Link onClick={ClickHandler} to="/blog-single">
                        Lily Anne
                      </Link>
                    </li>
                    <li>Feb 12,2021</li>
                  </ul>
                </div>
              </div>
              <div className="grid">
                <div className="entry-media">
                  <img src={blog3} alt="" />
                </div>
                <div className="details">
                  <h3>Giving forests the chance to regenerate naturally.</h3>
                  <p>
                    By communities having a sustainable source of timber through
                    our tree planting project means that they are able to now
                    conserve existing forests with indigenous trees and allow
                    natural regeneration to take place. Did you know? When trees
                    are chopped down for the timber to be used in construction
                    or furniture, the carbon can remain stored in the wood for
                    centuries.
                  </p>
                  <ul className="entry-meta">
                    <li>
                      <img src={blog4} alt="" />
                      By{" "}
                      <Link onClick={ClickHandler} to="/blog-single">
                        Lily Anne
                      </Link>
                    </li>
                    <li>Feb 12,2021</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
