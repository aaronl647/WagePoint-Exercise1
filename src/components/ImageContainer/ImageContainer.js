import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./ImageContainer.css";

/* I used another functional component to take in all the ImageItems to make it easier to add/remove images in the future. */

/* This method also allows manipulate the CSS easier */

function ImageContainer() {
  return (
    <div className="image-container">
      <ImageItem
        src="assets/images/creditcard.png"
        alt="credit card"
        text="Direct deposit."
      />
      <ImageItem
        src="assets/images/checklist.png"
        alt="checklist"
        text="Online access to paystubs."
      />
      <ImageItem
        src="assets/images/calculator.png"
        alt="calculator"
        text="Automated payroll taxes."
      />
      <ImageItem
        src="assets/images/heart.png"
        alt="heart"
        text="Friendly, caring support."
      />
    </div>
  );
}

export default ImageContainer;
