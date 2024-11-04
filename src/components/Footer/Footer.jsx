import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/logo7.png" alt="Company Logo" />
        </div>
        
        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>123 Street Name, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="footer-social">
            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
