import React from "react";
import "./Care.css";
import tickIcon from "../asset/tick.png";
import caringImage from "../asset/dr.png";

const Care = () => {
  return (
    <div className="PatientCare">
      <img src={caringImage} alt="Patient Care" />
      <div className="container">
        <div className="subtitle">HELPING PATIENTS FROM AROUND THE GLOBE!!</div>
        <div className="title"><span>Patient</span> <span>Caring</span></div>
        <div className="description">
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </div>
        <div className="features">
          <img src={tickIcon} alt="Tick" />
          <p>Stay Updated About Your Health</p>
        </div>
        <div className="features">
          <img src={tickIcon} alt="Tick" />
          <p>Check Your Results Online</p>
        </div>
        <div className="features">
          <img src={tickIcon} alt="Tick" />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default Care;
