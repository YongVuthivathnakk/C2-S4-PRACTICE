import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsInstagram } from "react-icons/bs";
import { useState } from "react";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [index, setIndex] = useState(0)
  /* You will need to hanle the click on left and right button */
  function clickLeft() {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  /* Handle click on right button */
  function clickRight() {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }


  /* You will need to manage the cases when we are on the last image or first image*/


  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={clickLeft} className="arrow arrow-left" />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[index].src} alt={images[index].alt} className="slide" />

      <BsArrowRightCircleFill onClick={clickRight} className="arrow arrow-right" />
    </div>
  );
};
