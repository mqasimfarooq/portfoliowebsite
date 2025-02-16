import React from "react";
import { FaGlobe } from "react-icons/fa";
import "./Services.css";


const Services = ({ title, description, Icon }) => {
  return (
    <div className="flexy_Row">
      <div className="flexycolumn1">
        <Icon size={25} color="#4f7bda" className="globe" />
      </div>
      <div className="flexycolumn2">
        <p id="p1">{title}</p>
        <p id="p2">{description}</p>
      </div>
    </div>
  );
};

export default Services;
