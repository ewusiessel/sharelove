import React, { Fragment } from "react";
import Navbar3 from "../../components/Navbar3";
import PageTitle from "../../components/pagetitle";
import About from "../../components/about";
// import TeamSection from "../../components/team";
import BlogSection from "../../components/BlogSection";
import Causes from "../../components/Causes";
import CounterSection from "../../components/counter";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import abimg from "../../images/Volunteers.jpg";

const CasePage = () => {
  return (
    <Fragment>
      <Navbar3 />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About AbImg={abimg} />
      <Causes />
      <CounterSection />
      <BlogSection />
      <Newsletter />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CasePage;
