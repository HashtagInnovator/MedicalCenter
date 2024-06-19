import React, { useState } from "react";
import "./Bookings.css";
import Navbar from "./MainNavigation";

import searchgrey from "../asset/searchgrey.png";
import searchwhite from "../asset/searchwhite.png";

import oralhealth from "../asset/oralhealthcare.png";
import Center from "./Hospital";

const MyBookings = ({ appointments }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <div >
        My Bookings
      </div>
      <div className="search">
        <div className="inputValue">
          <img src={searchgrey} alt="" srcset="" />
          <input
            type="text"
            placeholder="search by hospital"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button>
          <img src={searchwhite} alt="" />
          Search
        </button>
      </div>

      {appointments ? (
        <div>
          <div>
            <div>
              {appointments.length ? (
                appointments.map((center, index) => (
                  <Center
                    center={center}
                    key={index}
                    readOnly

                  />
                ))
              ) : (
                <h1>No bookings yet</h1>
              )}
            </div>

            <img className="oralhealth" src={oralhealth} alt="" srcset="" />
          </div>
        </div>
      ) : (
        <h1 className="Nothing">Please Select State and City</h1>
      )}


    </>
  );
};

export default MyBookings;
