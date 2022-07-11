import React from 'react'
import './footer.css';


function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others.
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <strong className='footer_logo'>
            VETA-AI
          </strong><br/>
          <p>Crechterwoord K12 Marina, Lagos State, <br /> All Rights Reserved</p>
        </div>
        {/* Links */}
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 Marina, Lagos State</p>
          <p>912-2307761</p>
          <p>infogpt3@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Copyright Veta-AI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
