import React from "react";
import "./Serch.css";

const Serch = () => {
  return (
    <div className="search-container" onClick={() => {}}>
      <img className="lupa" src="../static/icons/lupa.png" alt="" />
      <input type="text" className="search-input" placeholder="Search Movie" />
    </div>
  );
};

export default Serch;
