import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Mainpage from "./components/MainPage/Mainpage";
import { BlogPage } from "./components";
import AboutPage from "./components/aboutPage/AboutPage";
import ArticleDetail from "./components/articlesPage/components/articleDetail";
import PortfolioDetail from "./container/Work/PortfolioDetail";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
