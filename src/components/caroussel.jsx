import React from "react";
import '../styles/components/_caroussel.scss';
import { useState } from "react";

export default function Carousel (props) {
const pictures = props.pictures
const [currentPicture, setCurrentPicture] = useState(0)
const getClassName = (i) => {
  if (i === currentPicture) return "show"
  return ""
}
const moveToNext = () =>{
  setCurrentPicture((currentPicture +1) % pictures.length)
  //modulo pictures.length

}
const moveToPrevious = () =>{
  const newCurrentPicture = currentPicture -1;
 if (newCurrentPicture < 0) {
setCurrentPicture(pictures.length -1)
return
}
setCurrentPicture(currentPicture -1)
}
    return (
      <div className="slider">
       
        <div  className="=slider_image">
       
        {pictures.map((picture, i) => (
          <img key={i}   src={picture} alt='' className={getClassName(i)} />
        ))}
        </div>
        <div className="btn_container">
          <button className="btn previous chevron"  onClick={moveToPrevious}>&#60;</button>
          <button className="btn next chevron" onClick={moveToNext}>&#62;</button>
          <span className="counter">{currentPicture +1}/{pictures.length}</span>
        </div>
      </div>
    );
  };
