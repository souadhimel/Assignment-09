import React from "react";
import "./Form.css";

const CustomForm = () => {
  return (
    <div className="form">
      <h3>Contact Form</h3>

      <div className="container-form">
        <form>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="first name"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="last name"
            placeholder="Your last name.."
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="bangladesh">Bangladesh</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="australia">Australia</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: 200 }}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CustomForm;
