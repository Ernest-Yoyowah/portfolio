import React from "react";
import { BrowserRouter, Routes, Route } from "react-dom";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Education,
} from "./container";
import { Navbar, BlogPage } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Education />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
