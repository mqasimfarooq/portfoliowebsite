import React from "react"
import './Review.css'
import Card from "./Card";
import testimonials from './test.js'

const Review = ({statement,summary,user}) => {
  return (
    <div className="Father">
        <div id="div1">We've helped our clients complete 3,000+ projects</div>
        <div id="div2">Over the last 15 years, we've been driven by our passion for helping global clients achieve their goals.</div>
        <div className="div3_parent">
            {testimonials.map((item, index) => (
                <Card
                    key={index}
                    statement={item.statement}
                    summary={item.summary}
                    user={item.user}
                />
            ))}
            
        </div>
        
        
    </div>
  )
};

export default Review;
