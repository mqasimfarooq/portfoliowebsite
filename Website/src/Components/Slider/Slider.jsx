import './Slider.css'
import React from "react";
import Marquee from "react-marquee-slider";
import "./slider.css";


const Slider = () => {
  // Array of logo URLs instead of imports
  const logos = [
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d8695d5233bc7852a42b_Dealty%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86ab6a8fb3f7c0486d0_Recurate%20Logo.webp", // replace with actual URLs
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86ab6a8fb3f7c0486d0_Recurate%20Logo.webp", // replace with actual URLs
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86969a9e35997c0fb99_Intellirent%20Logo.webp", // replace with actual URLs
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86a4544b0ebd559faf7_Al%20Jouf%20Logo.webp", // replace with actual URLs
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d869832d74b8b5e6a9d9_Maple%20Logo.webp", // replace with actual URLs
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86ae6d44cc29ad852a0_Kallidus%20Logo.webp", // replace with actual URLs
  ];
  

  return (
    <div className="slider-container">
      <Marquee velocity={60} resetAfterTries={5} loop={0}>
        {logos.map((logo, index) => (
          <div className="slider-item" key={index}>
            <img src={logo} alt={`logo-${index}`} className="logo-image" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;