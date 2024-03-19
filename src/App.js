import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Mainpage from "./components/MainPage/Mainpage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
