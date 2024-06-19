import React from "react";
import "./QuestionSection.css";
import doctorImg from "../asset/img.png";
import plusIcon from "../asset/plus.png";
import likesIcon from "../asset/likes.png";
import loveIcon from "../asset/love.png";

const Questions = () => {
  return (
    <div className="QuestionSection">
      <div className="getAns">Get Your Answer</div>
      <div className="freq">Frequently Asked Questions</div>
      <div className="imgSec">
        <img className="doc" src={doctorImg} alt="Doctor" />
        <img className="likesSec" src={likesIcon} alt="Likes" />
        <img className="loveSec" src={loveIcon} alt="Love" />

        <div className="quest">
          <div>
            <p>Why choose our medical for your family?</p>
            <img src={plusIcon} alt="Plus" />
          </div>
          <div>
            <p>Why we are different from others?</p>
            <img src={plusIcon} alt="Plus" />
          </div>
          <div>
            <p>Trusted & experienced senior care & love</p>
            <img src={plusIcon} alt="Plus" />
          </div>
          <div>
            <p>How to get appointment for emergency cases?</p>
            <img src={plusIcon} alt="Plus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
