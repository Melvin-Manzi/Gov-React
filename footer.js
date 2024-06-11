import React from 'react';
import '../style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3 className='h3gov'>GovManager</h3>
          <p className='noneed'>No need to worry, we'll help you make sense of it all.</p>
          <input type="email" placeholder="Enter your email" />
          <button><FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /></button>
        </div>
        <div className="footer-column">
          <h3 className='footer-about'>About</h3>
          <ul className='first-ul'>
            <li>What We Offer</li>
            <li>Features</li>
            <li>FAQ</li>
            <li>Leadership</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='footer-solutions'>Services</h3>
          <ul className='second-ul'>
            <li>Licenses</li>
            <li>Permissions</li>
            <li>Records</li>
            <li>Compliance</li>
            <li>Bill of laws</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='footer-personal'>Personal</h3>
          <ul className='third-ul'>
            <li>Compliance</li>
            <li>Account</li>
            <li>Records</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
      <p className="copyright">© Copyright 2024 by GovManager All rights reserved.</p>
    </footer>
  );
};

export default Footer;
