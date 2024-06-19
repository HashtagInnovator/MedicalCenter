import React from "react";
import "./Doctors.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/navigation";
import ahemad from "../asset/drahmad.png";
import ankur from "../asset/drankur.png";
import heena from "../asset/drheena.png";
import rajdeep from "../asset/drrajdeep.png";
import sudhir from "../asset/drsudhir.png";

const Doctors = () => {
  return (
    <div className="TeamSection">
      <h1>Meet Our Medical Specialists</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ahemad} alt="Dr. Ahemad Khan" />
            </div>
            <div className="data">
              <h1>Dr. Ahemad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ankur} alt="Dr. Ankur Sharma" />
            </div>
            <div className="data">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={heena} alt="Dr. Heena Sachdeva" />
            </div>
            <div className="data">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopedics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={rajdeep} alt="Dr. Rajdeep Sardesai" />
            </div>
            <div className="data">
              <h1>Dr. Rajdeep Sardesai</h1>
              <p>Cardiologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={sudhir} alt="Dr. Sudhir Chaudhary" />
            </div>
            <div className="data">
              <h1>Dr. Sudhir Chaudhary</h1>
              <p>ENT Specialist</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Doctors;
