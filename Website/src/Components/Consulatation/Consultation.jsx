import React from "react"
import './Consultation.css'
import p1 from './j1.webp'
import p2 from './j2.webp'
import p3 from './j3.webp'
import p4 from './j4.webp'



const Consultation = (props) => {
  return (
    <div className="Dad">
     
        <div className="flexy1">
            <p>Schedule a free consultation <span className="puss2" >with one of our experts.</span></p>
            <p id="p1">Take the first step towards a brighter future and supercharge your business with cutting-edge technologies,
                <span className="puss"> expert guidance, and unparalleled support.</span>
            </p>
            <button>Schedule Now</button>
        </div>
        <div className="flexy2">
            <img className='Myimg' src={p1}/>
            <img className='Myimg' src={p2}/>
            <img className='Myimg' src={p3}/>
            <img className='Myimg'src={p4}/>

        </div>
    </div>
    
  )
};

export default Consultation;