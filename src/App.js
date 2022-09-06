import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Compare from './pages/Compare'

const App = () => {
  
  return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/compare" element={<Compare />} />
        </Routes>
    </Router>
  );
};

export default App;