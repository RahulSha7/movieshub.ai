import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </HashRouter>
  );
};

export default Body;
