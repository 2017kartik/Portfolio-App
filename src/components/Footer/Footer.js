import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <p>Follow me</p>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <hr class="featurette-divider"></hr>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="footer-content">
          <p style={{ fontSize: "24px", fontWeight: "500" }}>WebDev</p>
          <p style={{ margin: "12px 10px" }}>
            <a href="/">Help</a>
          </p>
          <p style={{ margin: "12px 10px" }}><a href="/">Privacy</a></p>
          <p style={{ margin: "12px 10px" }}><a href="/">Terms</a></p>
        </div>
        <p>© 2024 Web-Developer. All Right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
