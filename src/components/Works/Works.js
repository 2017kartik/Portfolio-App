import React from "react";
import "./Works.css";
import w1 from "../../assets/Netflix-Clone.png";
import w2 from "../../assets/Eats.png";

const Works = () => {
  return (
    <div className="works-container">
      <h1
        style={{
          color: "#fff",
          marginBottom: "50px",
          marginTop: "50px",
          animationDelay: "2.5s",
        }}
      >
        My Recent Works
      </h1>
      <div className="works-list-container">
        <div className="work-item netflix">
          <img src={w1} alt="work1" />
          <div className="work-content">
            <h3>Netflix Clone</h3>
            <p>
              Netflix's layout and look using just HTML and CSS. This will be a
              static mock-up, meaning it won't have any functionalities like
              user login or video playback. However, it will be responsive,
              adjusting its design for different screen sizes like phones and
              laptops.x
            </p>
          </div>
        </div>
        <div className="work-item up">
          <div className="work-content">
            <h3>Employee Attendance Tracking System</h3>
            <p>
              In my first hackathon, I built a web-based employee attendance
              tracking system using HTML5, CSS3, and Bootstrap. This multi-user
              application featured dedicated sections for employees, HR
              personnel, and administrators. Employees and admins could log in,
              mark attendance, and view reports & assigned tasks. HR personnel
              had additional functionalities to manage employee and HR accounts,
              along with report access.
            </p>
          </div>
          <img src={w2} alt="work2" style={{ borderTopLeftRadius: "0" }} />
        </div>
        <div className="work-item down">
          <img src={w2} alt="work2" />
          <div className="work-content">
            <h3>Employee Attendance Tracking System</h3>
            <p>
              This will be a static mock-up, meaning it won't have any
              functionalities like user login or video playback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
