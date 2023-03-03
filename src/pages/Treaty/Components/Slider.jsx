// import React from "react";
import {Carousel} from "react-bootstrap";
import IMAGES from "../../../assets/images";

function Slider() {

  return (
    <div id="home">
      <Carousel slide>
        <Carousel.Item>
          <Carousel.Caption>
            <p className="text-white carousel-text ">
              TREATY HEALTH IS THE GO-TO SYSTEM TO IMPROVE YOUR TEAM
              COMMUNICATION, WHILE CONNECTING YOU WITH THE PATIENTS AND FAMILIES
              YOU SERVE
            </p>
          </Carousel.Caption>
          <img
            className="d-block pt-5 carousel-img img-fluid"
            src={IMAGES.SLIDERDATA}
            alt="First slide" />
        </Carousel.Item>
        <Carousel.Item > 
        <Carousel.Caption>
            <p className="text-white carousel-text ">
              TREATY HEALTH IS THE GO-TO SYSTEM TO IMPROVE YOUR TEAM
              COMMUNICATION, WHILE CONNECTING YOU WITH THE PATIENTS AND FAMILIES
              YOU SERVE
            </p>
          </Carousel.Caption>
          
          <img
            className="d-block pt-5 carousel-img img-fluid"
            src={IMAGES.SLIDERCALENDER}
            alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item >
        <Carousel.Caption>
            <p className="text-white carousel-text ">
              TREATY HEALTH IS THE GO-TO SYSTEM TO IMPROVE YOUR TEAM
              COMMUNICATION, WHILE CONNECTING YOU WITH THE PATIENTS AND FAMILIES
              YOU SERVE
            </p>
          </Carousel.Caption>
        
          <img
            className="d-block pt-5 carousel-img img-fluid"
            src={IMAGES.SLIDERMEET}
            alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
