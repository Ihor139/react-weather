import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "./About";
import Error from "./Error";
import Home from "./Home";
import Team from "./Team";

const Routers = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Routers;
