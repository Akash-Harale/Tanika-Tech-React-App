import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div >
        <footer className="footer">
      <div >
        <p>&copy; {year} MyWebsite. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
