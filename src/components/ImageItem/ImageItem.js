import React from "react";
import "./ImageItem.css";

/* I decided to use a functional component for the ImageItems to allow reuseability throughout the app.  */

function ImageItem(props) {
  return (
    <>
      <div className="image-item-container">
        <img src={props.src} alt={props.alt} />
        <p className="text-description">{props.text}</p>
      </div>
    </>
  );
}

export default ImageItem;
