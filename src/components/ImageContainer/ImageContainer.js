import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./ImageContainer.css";
import CreditCard from "../../images/creditcard.png";
import CheckList from "../../images/checklist.png";
import Calculator from "../../images/calculator.png";
import Heart from "../../images/heart.png";

/* I used another functional component to take in all the ImageItems to make it easier to add/remove images in the future. */

/* This method also allows manipulate the CSS easier */

function ImageContainer() {
  return (
    <div className="image-container">
      <ImageItem src={CreditCard} alt="credit card" text="Direct deposit." />
      <ImageItem
        src={CheckList}
        alt="checklist"
        text="Online access to paystubs."
      />
      <ImageItem
        src={Calculator}
        alt="calculator"
        text="Automated payroll taxes."
      />
      <ImageItem src={Heart} alt="heart" text="Friendly, caring support." />
    </div>
  );
}

export default ImageContainer;
