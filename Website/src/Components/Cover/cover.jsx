import React from "react";
import './cover.css';

const Cover = (props) => {
  return (
    <div className="Parent">
      <div className="gradient">
        <p className="p1">
          Be the <span id="span1">market leader</span>
        </p>
        <p className="p1">in your industry</p>
        <p className="description">
          Access 2,000+ passionate and experienced software engineers with skillsets in 100+ technologies,
        </p>
        <p id="p2">in your timezone.</p>
        <div className="buttons">
          <button className="Button1" id="b1">
            Schedule free Strategy call
          </button>
          <button className="Button1" id="b2">
            See our work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
