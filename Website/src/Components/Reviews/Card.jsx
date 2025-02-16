import React from "react";
import "./Review.css";
import { FaStar } from "react-icons/fa";

const Card = ({statement,summary,user}) => {
  return (
    <div id="div3">
      <div>
        <FaStar className="Star" />
        <FaStar className="Star" />
        <FaStar className="Star" />
        <FaStar className="Star" />
        <FaStar className="Star" />
      </div>
      <div>{statement}</div>
      <div>
        {summary}
      </div>
      <div>{user}</div>
    </div>
  );
};

export default Card;
