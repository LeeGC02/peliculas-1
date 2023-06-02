import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";
const Slider = () => {
  return (
    <motion.div className="slider-container">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -400 }}
      >
        <motion.div className="movie-item">
          <img src="../static/image/portada.jpg" alt="" />
        </motion.div>
        <motion.div className="movie-item">
          <img src="../static/image/portada.jpg" alt="" />
        </motion.div>
        <motion.div className="movie-item">
          <img src="../static/image/portada.jpg" alt="" />
        </motion.div>
        <motion.div className="movie-item">
          <img src="../static/image/portada.jpg" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
