import React from "react";
import "../css/loader.css";

const Loading = ({ dark }) => {
  return (
    <div className={`loader ${dark && "dark"}`}>
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};

export default Loading;
