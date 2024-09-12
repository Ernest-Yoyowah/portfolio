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
import ArticlesPage from "../articlesPage/articlesPage";
import Portfolio from "../../container/Work/Portfolio";

const Mainpage = () => {
  return (
    <>
      <Navbar link="/about" name="About" />
      <Header />
      {/* <About /> */}
      {/* <Work /> */}
      <Portfolio />
      <ArticlesPage />
      {/* <Skills /> */}
      {/* <Education /> */}
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
};

export default Mainpage;
