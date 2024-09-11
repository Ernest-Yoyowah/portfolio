import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Mainpage from "./components/MainPage/Mainpage";
import { BlogPage } from "./components";
import AboutPage from "./components/aboutPage/AboutPage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
