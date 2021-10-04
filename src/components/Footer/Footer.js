import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-3 my-2 bg-danger text-white">
        <div className="container">
          <div className="row m-5 align-items-center justify-content-lg-between">
            <div className="col-md-8">
              <ul className="d-flex nav my-2">
                <li className="m-2 nav-item">Download now</li>
                <li className="m-2 nav-item">License</li>
              </ul>
              <ul className="d-flex nav my-2">
                <li className="m-2 nav-item">About</li>
                <li className="m-2 nav-item">Upcoming courses</li>
                <li className="m-2 nav-item">Pricing</li>
                <li className="m-2 nav-item">Careers</li>
                <li className="m-2 nav-item">Help</li>
                <li className="m-2 nav-item">Privacy policy</li>
              </ul>
              <div>&copy; 2021 online tutorials, all rights reserved</div>
            </div>

            <div className="col-md-4">
              <h3>Get the App</h3>
              <img
                src="https://miro.medium.com/max/852/1*grpEUqlOJE6Fysw7ErWIBQ.jpeg"
                className="img-fluid bg-dark"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
