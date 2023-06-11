import React from 'react'

const HeroSection = () => {
  return (
    <div className=" hero-container">
        <div className="video"> 
            <video src="pictures-vedic\pexels-mikhail-nilov-6981411-1920x1080-25fps.mp4" autoPlay loop muted opacity />
        </div>
        <div className="mx-5 d-flex nav-fill justify-content-between align-items-center">
            <img src=" pictures-vedic\vedic-energie-logo.jpg" alt="Logo" className="my-5"/>
            <ul className="nav nav-pills">
               <li className="nav-item mx-2"><a className="nav-link" href="#">About Us</a></li>
               <li className="nav-item mx-2"><a className="nav-link" href="#">Services</a></li>
               <li className="nav-item mx-2"><a className="nav-link" href="#">Blog</a></li>
               <li className="nav-item mx-2"><a className="nav-link" href="#">Contact Us</a></li>
               <li className="nav-item mx-2"><a className="nav-link active" aria-current="page" href="#">Get A quote</a></li>
            </ul>
        </div>
    </div>
    
  )
}

export default HeroSection
