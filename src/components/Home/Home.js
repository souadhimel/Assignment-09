import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("./Assignment.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 3)));
  }, []);
  return (
    <div className="row row-cols-md-3 g-3">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Home;
