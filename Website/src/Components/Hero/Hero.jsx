import React, { useState } from "react";
import './Hero.css';
import blue from '../../assets/blue.png';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>  
            <div className="d1">
                 <img src={blue} alt="dev png" id='logo2' />
            </div>
            <button id="toggle-sidebar" onClick={toggleSidebar}>
                {isOpen ? <FaTimes style={{ fontSize: '35px' }}/> : <FaBars style={{ fontSize: '35px' }}/>}
            </button>
            <nav className={`Navi ${isOpen ? 'active' : ''}`}>
                <img src={blue} alt="dev png" id='logo' />
                <li className={`Navlist ${isOpen ? 'active' : ''}`}>
                    <ul><a className="Nav-child" href="#">Case Studies</a></ul>
                    <ul><a className="Nav-child" href="#">Services</a></ul>
                    <ul><a className="Nav-child" href="#">About</a></ul>
                    <ul><a className="Nav-child" href="#">Careers</a></ul>
                    <ul><a className="Nav-child" href="#">Learning</a></ul>
                </li>
                <div id="SCD">
                    <p>Schedule Strategy Call</p>
                    <FaArrowRight className="arrow" />
                </div>
            </nav>
        </>
    );
};

export default Hero;
