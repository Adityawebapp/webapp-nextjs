import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./About";

import envolondon from "../images/homeImage/project-done/envolondon.png";
import hurl from "../images/homeImage/project-done/hurl.png";
import invest from "../images/homeImage/project-done/invest.png";
import pengting from "../images/homeImage/project-done/peng-ting.png";
import sharo from "../images/homeImage/project-done/sharo@2x.png";
import sushiya from "../images/homeImage/project-done/sushiya.png";
import tjv from "../images/homeImage/project-done/tjv.png";

const CompanyProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
    
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="flex items-center overflow-hidden">
        <div>
          <Image width={150} height={70} src={envolondon} alt="dsfsdf" />
        </div>
        <div>
          <Image width={150} height={150} src={hurl} alt="dsfsdf" />
        </div>
        <div>
          <Image width={150} height={70} src={invest} alt="dsfsdf" />
        </div>
        <div>
          <Image width={150} height={70} src={pengting} alt="dsfsdf" />
        </div>
        <div>
          <Image width={150} height={150} src={sharo} alt="dsfsdf" />
        </div>
        <div>
          <Image width={150} height={150} src={sushiya} alt="dsfsdf" />
        </div>
        <div>
          <Image width={200} height={100} src={tjv} alt="dsfsdf" />
        </div>
      </Slider>
    </>
  );
};

export default CompanyProduct;
