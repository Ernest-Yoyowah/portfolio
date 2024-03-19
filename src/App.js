import React from "react";
import { BrowserRouter, Routes, Route } from "react-dom";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Education from "./container/Education/Education";

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
