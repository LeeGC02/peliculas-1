import React from "react";
import "./Movies.css";
import Slider from "./Slider";
const Movies = () => {
  return (
    <div className="container">
      <div className="first-container">
        <span className="title">Coming Soon</span>
        <Slider />
      </div>
    </div>
  );
};

export default Movies;
