import React from "react";
import "./Service.css";
const Service = (props) => {
  const { picture, duration, coordinator, phone, fee } = props.service;
  return (
    <div>
      <div className="col service-card">
        <div className="card">
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>Duration:{duration} months</h5>
            <h5>Coordinator:{coordinator}</h5>
            <p>Call @{phone}</p>
            <h5>Course fee:${fee}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
