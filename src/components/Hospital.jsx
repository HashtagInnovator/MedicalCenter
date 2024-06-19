import React, { useState } from "react";
import "./Hospital.css";
import centerImage from "../asset/center.png";
import likeIcon from "../asset/like.png";
import Appointments from "./Appoint";

const Hospital = ({
  center,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
  readOnly,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="CenterWrapper">
      <div className="UpperSection">
        <div className="LeftImage">
          <img src={centerImage} alt="" />
        </div>
        <div className="MiddleContent">
          {readOnly ? (
            <>
              <h3>{center.hospital}</h3>
              <h6>
                {center.city}, {center.state}
              </h6>
            </>
          ) : (
            <>
              <h3>{center["Hospital Name"]}</h3>
              <h6>
                {center.City}, {center.State}
              </h6>
            </>
          )}

          <p>Smilessence Center for Advanced Dentistry + 1</p>
          <p>more</p>
          <div>
            <span className="free-tag">FREE</span>
            <span className="price-tag">₹500</span>
            <span className="fee-tag">Consultation fee at clinic</span>
          </div>
          <div className="LikeButton">
            <img src={likeIcon} alt="" />
          </div>
        </div>
        {readOnly ? (
          <div className="RightContent-MyBookings">
            <div className="time-tag">{center.time}</div>
            <div className="date-tag">{center.date}</div>
          </div>
        ) : (
          <div className="RightContent">
            <p>Available Today</p>
            <button onClick={() => setShowDetails(!showDetails)}>
              Book FREE Center Visit
            </button>
          </div>
        )}
      </div>
      {showDetails && (
        <div className="LowerSection">
          <Appointments
            name={center["Hospital Name"]}
            state={center.State}
            city={center.City}
            appointments={appointments}
            addAppointment={addAppointment}
            availableSlots={availableSlots}
            setAvailableSlots={setAvailableSlots}
          />
        </div>
      )}
    </div>
  );
};

export default Hospital;

