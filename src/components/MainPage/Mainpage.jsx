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
import Demo from "../../container/Work/demo";
import ArticlesPage from "../articlesPage/articlesPage";

const Mainpage = () => {
  return (
    <>
      <Navbar link="/about" name="About" />
      <Header />
      {/* <About /> */}
      {/* <Work /> */}
      <Demo />
      <ArticlesPage />
      {/* <Skills /> */}
      {/* <Education /> */}
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
};

export default Mainpage;
