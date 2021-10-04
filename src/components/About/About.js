import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about m-4">
      <div>
        <h2>About us</h2>
        <p>
          Online Tutorial is the best site for online teaching in this pandemic.
          We possess high posture of customer satisfaction, one to one problem
          solving, 24/7 online help, life time membership and many more....
        </p>
      </div>
      <div className="img-about">
        <img
          src="https://technext.github.io/ezuca/images/video-screenshot.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
