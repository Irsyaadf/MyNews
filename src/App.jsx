import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/article" element={<ArticlePage />} /> 
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
