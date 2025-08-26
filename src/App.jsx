import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
