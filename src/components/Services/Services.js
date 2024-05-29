import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-item-container">
        <div className="services-item item-desc-html">
          <i class="fab fa-html5"></i>
          <div className="item-desc">
            <h3>HTML 5</h3>
            <p>
              Demonstrates a high level of proficiency. Proficient in HTML5
              (Standard): Shows a solid understanding and ability to use HTML5
              effectively.
            </p>
          </div>
          <i
            class="fa-solid fa-arrow-right"
            style={{
              fontSize: "2rem",
              color: "#078efb",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></i>
        </div>
        <div className="services-item item-desc-css">
          <i class="fab fa-css3"></i>
          <div className="item-desc">
            <h3>CSS 3</h3>
            <p>
              Demonstrates a high level of proficiency in features like
              animations, flexbox, or grid.Shows a solid understanding and
              ability to use core CSS 3 (Standard) functionalities for styling
              and layout.
            </p>
          </div>
          <i
            class="fa-solid fa-arrow-right"
            style={{
              fontSize: "2rem",
              color: "#078efb",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></i>
        </div>
        <div className="services-item item-desc-javascript">
          <i class="fa-brands fa-js"></i>
          <div className="item-desc">
            <h3>JavaScript</h3>
            <p>
              Built interactive features and dynamic web applications.
              (Strongest - emphasizes both breadth and depth). Experience with
              DOM manipulation, user interaction, and basic animations.
              (Standard - highlights core competencies).
            </p>
          </div>
          <i
            class="fa-solid fa-arrow-right"
            style={{
              fontSize: "2rem",
              color: "#078efb",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></i>
        </div>
        <div className="services-item item-desc-bootstrap">
          <i class="fa-brands fa-bootstrap"></i>
          <div className="item-desc">
            <h3>Bootstrap</h3>
            <p>
              I can rapidly build responsive websites using Bootstrap's grid
              system, pre-built components, and extensive customization
              options.My experience allows me to create user-friendly interfaces
              that adapt seamlessly across different devices, ensuring a smooth
              user experience for all visitors.
            </p>
          </div>
          <i
            class="fa-solid fa-arrow-right"
            style={{
              fontSize: "2rem",
              color: "#078efb",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></i>
        </div>
        <div className="services-item item-desc-reactjs">
          <i class="fa-brands fa-react"></i>
          <div className="item-desc">
            <h3>React JS</h3>
            <p>
              Skilled in React.js, adept at building dynamic and interactive
              user interfaces. Possess a strong understanding of component-based
              architecture, state management with tools like Redux or Context
              API, and user routing with React Router.
            </p>
          </div>
          <i
            class="fa-solid fa-arrow-right"
            style={{
              fontSize: "2rem",
              color: "#078efb",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Services;
