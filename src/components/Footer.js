import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedIn, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" style={{ backgroundColor: 'rgb(212, 255, 203)' }}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="pictures-vedic\vedic-energie-logo.jpg" alt="Logo" />
              </div>
              <p>
              It is a long established fact that a
              reader will be distracted by the
              readable content of a page when
              looking at its layout.
              </p>
              <div className="footer-social-links m-2">
                <h4 style={{textDecoration: 'underline'}}>SOCIAL LINKS</h4>
                <a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="xl" style={{color: "#093d09", margin: "10px"}} /></a>
                {/* <a href="#"><FontAwesomeIcon icon={faLinkedIn} size="xl" style={{color: "#093d09", margin: "10px"}} /></a> */}
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} size="xl" style={{color: "#093d09", margin: "10px"}} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitterSquare} size="xl" style={{color: "#093d09", margin: "10px"}} /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-column">
              <h4 style={{textDecoration: 'underline'}}>Quick Links</h4>
              <div className="footer-links">
                <div>Home</div>
                <div>About Us</div>
                <div>Testimonial</div>
                <div>Blog</div>
                <div>Our Team</div>
                <div>Careers</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-column">
              <h4 style={{textDecoration: 'underline'}}>Services</h4>
              <div className="footer-links">
                <div>Energy Calculation</div>
                <div>Energy Demand Management</div>
                <div>Energy Supply Solution</div>
                <div>Renewable Energy Solution</div>
                <div>Reduce Energy Bills</div>
                <div>Energy Saving</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-column">
              <h4 style={{textDecoration: 'underline'}}>Contact</h4>
              <div className="footer-links">
                <div>
                <FontAwesomeIcon icon={faLocationDot} size="xl" style={{color: "#093d09", margin: "10px"}} />
                   31 Steeplebush Ave Unit 1
                        Brampton, ON L6R 3B4
                </div>
                <div><FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#093d09", margin: "10px"}} />contact@vedicenergie.com</div>
                <div><FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#093d09", margin: "10px"}} />+91 98439 377773</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <p>&copy; 2023 Company Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
