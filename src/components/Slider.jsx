import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";

const Slider = ({ category, movies }) => {
  return (
    <motion.div className="slider-container">
      <h2>{category}</h2>
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -400 }}
      >
        {movies && movies.length > 0 ? (
          movies.slice(0, 5).map((movie) => (
            <motion.div className="movie" key={movie.id}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            </motion.div>
          ))
        ) : (
          <p>No se encontraron películas</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
