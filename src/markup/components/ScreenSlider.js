import React from "react";

import SectionHeading from "./SectionHeading";

// import Swiper React components
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// images
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const ScreenSlider = () => {
  const data = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image4,
    },
  ];

  return (
    <>
      {/* screen section header - start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-0 col-10 offset-1">
            <div className="screen-section-header">
              <SectionHeading
                icon="las la-tablet"
                heading="BrokerApp Features "
                subHeading="Have a look at what’s inside the app."
              />
            </div>
          </div>
          <div className="col-lg-4 offset-lg-0 col-10 offset-1">
            <div className="screen-slider-navigation slider-navigation">
              <div className="screen-slider-navigation-prev">
                <i className="las la-long-arrow-alt-left"></i>
              </div>
              <div className="screen-slider-navigation-next">
                <i className="las la-long-arrow-alt-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* screen section header - end */}
      {/* screen section slider - start */}
      <div className="screen-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".screen-slider-navigation-prev",
            prevEl: ".screen-slider-navigation-next",
          }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.8,
            },
            576: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 2.8,
            },
            992: {
              slidesPerView: 4.8,
            },
          }}
        >
          {data.map((element, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="screen-slide">
                  <figure>
                    <img src={element.src} alt="app-screen" />
                  </figure>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* screen section slider - end */}
    </>
  );
};

export default ScreenSlider;
