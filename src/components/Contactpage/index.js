import React from "react";
import ContactForm from "../ContactFrom";
import "./style.css";

const Contactpage = () => {
  return (
    <section className="contact-pg-contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-area">
              <div className="section-title-s3 section-title-s5">
                <h2>Quick Contact Form</h2>
              </div>
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  );
};

export default Contactpage;
