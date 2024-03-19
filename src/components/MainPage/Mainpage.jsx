import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Education,
} from "../../container";
import { Navbar } from "../../components";

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Education />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Mainpage;
