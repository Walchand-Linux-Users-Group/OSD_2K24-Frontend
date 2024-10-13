"use client";

import React, { useEffect } from "react";
import "./text.css";

const Loader: React.FC = () => {
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.transition = "opacity 0.7s ease";
      loader.style.opacity = "1";
      setTimeout(() => {
        loader.style.opacity = "0";
      }, 4000);
    }
  }, []);

  return (
    <div id="loader">
      <h1>OPEN</h1>
      <h1>SOURCE</h1>
      <h1>DAY</h1>
      {/* <h1>2K24</h1> */}
    </div>
  );
};

export default Loader;
