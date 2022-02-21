import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ShopPage from "../ShopPage";
import GalleryPage from "../GalleryPage";
import ShopSinglePage from "../ShopSinglePage";
import CausePage from "../CasePage";
import CaseSinglePage from "../CaseSinglePage";
import EventPage from "../EventPage";
import EventPageSingle from "../EventPageSingle";
import DonatePage from "../DonatePage";
import VolunteerPage from "../volunteerPage";
import BlogPage from "../BlogPage";
import BlogDetailsFull from "../BlogDetailsFull";
import ContactPage from "../ContactPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";

const AllRoute = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/shop-single" component={ShopSinglePage} />
          <Route path="/case" component={CausePage} />
          <Route path="/case-single" component={CaseSinglePage} />
          <Route path="/event" component={EventPage} />
          <Route path="/event-details" component={EventPageSingle} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/volunteer" component={VolunteerPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-details-fullwidth" component={BlogDetailsFull} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
