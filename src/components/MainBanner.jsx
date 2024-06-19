import React from 'react';
import './MainBannerStyles.css';
import { Link } from 'react-router-dom';
import img from '../asset/main.png';
import discount30 from '../asset/freepercent30.png';
import discount100 from '../asset/freepercent100.png';
import greySearchIcon from '../asset/searchgrey.png';
import whiteSearchIcon from '../asset/searchwhite.png';
import doctorIcon from '../asset/doclogo.png';
import ambulanceIcon from '../asset/ambulance.png';
import capsuleIcon from '../asset/capsule.png';
import hospitalIcon from '../asset/hospital.png';
import drugstoreIcon from '../asset/medicinecenter.png';

import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SpecialisationSection from './SpecialisedSection';
import OurTeam from './Doctors';
import PatientCaring from './Care';
import BlogAndNews from './BlogAndNews';
import OurFamilySection from './OurFamilySection';
import QuestionSection from './Questions';

import { useNavigate } from 'react-router-dom';
import Navbar from './MainNavigation';

const MainBanner = ({
  selectedState,
  setSelectedState,
  states,
  selectedCity,
  setSelectedCity,
  cities,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="MainBanner">
        <Navbar />

        <div className="bannerContent">
          <div className="bannerText">
            <h3>
              Skip the travel! Discover Online <span>Medical</span>{' '}
              <span>Centers</span>
            </h3>
            <p>
              Connect instantly with a 24x7 specialist or schedule a video visit with a doctor.
            </p>
            <button
              onClick={() => {
                navigate('/findDoctor');
              }}
            >
              Find Centers
            </button>
          </div>
          <img src={img} alt="Main banner" />
        </div>

        <div className="floatingContainer">
          <div className="formContainer">
            <div className="inputControl selectWidth">
              <img src={greySearchIcon} alt="Search icon" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputControl selectWidth">
              <img src={greySearchIcon} alt="Search icon" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="searchButton"
              onClick={() => {
                navigate('/findDoctor');
              }}
            >
              <img src={whiteSearchIcon} alt="Search icon" />
              Search
            </button>
          </div>
          <h5>Looking for?</h5>
          <div className="categories">
            <div>
              <img src={doctorIcon} alt="Doctor icon" />
              <h6>Doctors</h6>
            </div>
            <div>
              <img src={drugstoreIcon} alt="Drugstore icon" />
              <h6>Labs</h6>
            </div>
            <div>
              <img src={hospitalIcon} alt="Hospital icon" />
              <h6>Hospitals</h6>
            </div>
            <div>
              <img src={capsuleIcon} alt="Capsule icon" />
              <h6>Medical store</h6>
            </div>
            <div>
              <img src={ambulanceIcon} alt="Ambulance icon" />
              <h6>Ambulance</h6>
            </div>
          </div>
        </div>

        <div className="promoImg">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            pagination={{ clickable: true }}
            style={{ width: 1250 }}
          >
            <SwiperSlide>
              <img className="promo" src={discount100} alt="100% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount30} alt="30% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount100} alt="100% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount30} alt="30% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount100} alt="100% Discount" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="promoImgMobile">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{ width: 300 }}
          >
            <SwiperSlide>
              <img className="promo" src={discount100} alt="100% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount30} alt="30% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount100} alt="100% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount30} alt="30% Discount" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="promo" src={discount100} alt="100% Discount" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <SpecialisationSection />
      <OurTeam />
      <PatientCaring />
      <BlogAndNews />
      <OurFamilySection />
      <QuestionSection />
    </>
  );
};

export default MainBanner;
