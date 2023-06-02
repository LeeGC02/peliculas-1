import React from "react";
import "./TabBar.css";
const TabBar = () => {
  return (
    <div className="container-tabbar">
      <div className="tabs">
        <button className="tab">
          <img src="../static/icons/home.png" alt="" />
        </button>
        <button className="tab">
          <img src="../static/icons/ticket.png" alt="" />
        </button>
        <button className="tab">
          <img src="../static/icons/star.png" alt="" />
        </button>
        <button className="tab">
          <img className="count" src="../static/icons/count.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default TabBar;
