import React from "react";

// import Swiper React components
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// images
import testimonial_image_1 from "../../assets/images/testimonial-slide-img-2.png";
import testimonial_image_2 from "../../assets/images/testimonial-slide-img-1.png";
import testimonial_image_3 from "../../assets/images/testimonial-slide-img-3.png";

const TestimonialSlider = () => {
  const data = [
    {
      image: testimonial_image_1,
      testimony:
        "“I've been using the property consultant app for my business, and I must say it has greatly simplified my workflow. The user interface is clean and intuitive, making it easy to navigate even for someone like me who isn't very tech-savvy”",
      name: "Jack William",
    },
    {
      image: testimonial_image_2,
      testimony:
        "“The property listings are comprehensive and well-organized, making it easy to find relevant options for my clients. The app's search functionality is robust, allowing me to filter properties based on specific criteria, saving me valuable time.”",
      name: "Jack William",
    },
    {
      image: testimonial_image_3,
      testimony:
        "“: The property consultant app has transformed my business operations. Its user-friendly interface ensures a hassle-free experience, even for those with limited tech proficiency. Notably reliable, the app's stability and speed contribute to efficient daily tasks, allowing me to respond promptly to client needs.”",
      name: "Jack William",
    },
  ];

  return (
    <div className="testimonial-slider">
      <Swiper
        className="swiper-container"
        resizeObserver={true}
        spaceBetween={0}
        initialSlide={1}
        // init={false}
        speed={250}
        slideToClickedSlide={true}
        slidesPerView={1.7}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            direction: "horizontal",
          },
          992: {
            direction: "vertical",
          },
        }}
      >
        {data.map((element, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="testimonial-slide">
                <div className="image">
                  <div className="image-wrapper">
                    <div className="image-inner">
                      <img src={element.image} alt="testimony" />
                    </div>
                  </div>
                </div>
                <div className="content">
                  <p>{element.testimony}</p>
                  <h5>— {element.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
