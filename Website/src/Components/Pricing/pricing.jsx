import React from "react"
import './pricing.css'
import s1 from "../../assets/1r.png"
import s2 from "../../assets/2r.png"
import s3 from "../../assets/3.png"

const Pricing = () => {
  return (
    <div className="pricemain">
        <div className="flex">
            <div className="detail">
                <p style={{ margin: "0", color: "#4f7bda", fontWeight:"bold"}}>Pricing</p>
                <h1 className="h1" >We leverage the <span style={{color:"#4f7bda"}}>latest advancements in AI</span > to deliver the highest quality technology,<span style={{color:"#4f7bda"}}> on time and on budget.</span></h1>
                <p style={{fontSize:"larger", color:"rgb(121, 135, 161)"}}>We’ve been helping customers since 2009 and take pride in delivering high-quality custom services designed to help you build, grow, and revolutionize your business.</p>
                <button className="transparent-btn" >see our reviews</button>
                <div className="projects">
                    <div className="proj">
                        <h1>236+</h1>
                        <p style={{margin:"0",color:"black"}}>Active clients</p>
                    </div>
                    <div className="proj">
                        <h1>3000+</h1>
                        <p>Projects Delivered </p>
                    </div>
                    <div className="proj">
                        <h1>23+</h1>
                        <p>Countries Supported</p>
                    </div>
                </div>
            </div>

            <div className="price">
                <div className="Contactus">
                    <div className="inner">
                        <p style={{color:"#4f7bda",fontSize:"16px",fontWeight:"600"}}>Starting from</p>
                        <h1 style ={{margin:0,fontSize:"40px"}}>$22/hour</h1>
                    </div>

                    <button className="contactbtn" >
                        Contact Us
                    </button>

                </div>
                <p style={{color:"rgb(121,j 135, 161)",fontSize:"large",marginTop:"10%"}}>With tools like ChatGPT and CoPilot, software development is being rapidly enabled by machines. Devsinc engineers are trained with these technologies, improving the ROI of your project.</p>
                <p style={{color:"rgb(121, 135, 161)",fontSize:"large"}}>Experience working with us for 2 weeks completely free of charge.</p>
                <p  style={{color:"rgb(121, 135, 161)",fontSize:"large"}}>We guarantee that we will make a positive impact on your project or continue working for free until we do.</p>
                <div className="servicecontainer">
                    <div className="serv">
                        <div className="image">
                            <img src={s1}/>
                        </div>
                        <div className="p">
                            <h1 style={{fontSize:"large",margin:"0"}}>Software Outsourcing</h1>
                            <p style={{margin:"0",padding:"10px 0",color:"rgb(121, 135, 161)", fontSize:"18px", fontWeight:"500"}}>Let us handle end-to-end delivery with complete software development outsourcing.</p>
                        </div>
                    </div>   
                    <div className="serv">
                        <div className="image">
                            <img src={s2} style={{color:"#4f7bda"}}/>
                        </div>
                        <div className="p">
                            <h1 style={{fontSize:"large",margin:"0"}}>Staff augmentation</h1>
                            <p style={{margin:"0",padding:"10px 0",color:"rgb(121, 135, 161)", fontSize:"18px", fontWeight:"450"}}>Add talent to your existing team through us and save time on sourcing, recruiting, and training.</p>
                        </div>
                    </div> 
                    <div className="serv">
                        <div className="image">
                            <img src={s3}/>
                        </div>
                        <div className="p">
                            <h1 style={{fontSize:"large",margin:"0"}}>Dedicated teams</h1>
                            <p style={{margin:"0",padding:"10px 0",color:"rgb(121, 135, 161)", fontSize:"18px", fontWeight:"500"}}>Move faster with a dedicated and functional team to your existing software development process.</p>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    </div>
  )
};

export default Pricing;
