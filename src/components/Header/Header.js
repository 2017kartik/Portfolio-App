import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/Profile.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hi! Am </h1>
        <h2 className="fullname">Kartik Agrawal</h2>
        <h2>
          I'm a {""}
          <span style={{ color: "#1a73e8" }}>
            <Typical
              steps={[
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
                "React Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </span>
        </h2>
        <p
          style={{ color: "#9aa0a6", animationDelay: "0.5s", marginLeft: "0" }}
        >
          Bridging the gap between frontend and backend, I craft seamless web
          experiences.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <a href="/">Hire me</a>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-google-pay"></i>
          <i className="fa-brands fa-cc-visa"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="Profile Image" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
