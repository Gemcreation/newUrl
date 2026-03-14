import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__logo">
          <img src={process.env.PUBLIC_URL + '/images/logo-white.svg'} alt="Shortly Logo" />
        </div>
        
        <div className="footer__links-container">
          <div className="footer__links-group">
            <h4>Features</h4>
            <ul>
              <li><a href="#link-shortening">Link Shortening</a></li>
              <li><a href="#branded-links">Branded Links</a></li>
              <li><a href="#analytics">Analytics</a></li>
            </ul>
          </div>
          
          <div className="footer__links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#developers">Developers</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          
          <div className="footer__links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#our-team">Our Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer__socials">
          <a href="#facebook" aria-label="Facebook">
            <img src={process.env.PUBLIC_URL + '/images/icon-facebook.svg'} alt="Facebook" />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <img src={process.env.PUBLIC_URL + '/images/icon-twitter.svg'} alt="Twitter" />
          </a>
          <a href="#pinterest" aria-label="Pinterest">
            <img src={process.env.PUBLIC_URL + '/images/icon-pinterest.svg'} alt="Pinterest" />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <img src={process.env.PUBLIC_URL + '/images/icon-instagram.svg'} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
