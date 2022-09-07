import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Compare from './pages/Compare'
import './app.css';

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/compare" element={<Compare />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;