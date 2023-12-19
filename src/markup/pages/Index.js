import React from "react";

// components
import DownloadButton from "../components/DownloadButton";
import SectionHeading from "../components/SectionHeading";
import AppFeatureSingle from "../components/AppFeatureSingle";
import Button from "../components/Button";
import PricingSlider from "../components/PricingSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import ScreenSlider from "../components/ScreenSlider";
import ContactForm1 from "../components/ContactForm1";
import ContactForm2 from "../components/ContactForm2";
import BlogSingle from "../components/BlogSingle";
import BackgroundAnimation from "../components/BackgroundAnimation";
import VideoLightBox from "../components/VideoLightBox";

// images
import hero_phone from "../../assets/images/hero-phone.png";
import artwork from "../../assets/images/Artwork.png";
import video_img from "../../assets/images/vid.jpg";
import background_image_1 from "../../assets/images/patterns/pattern-1.jpg";
import background_image_2 from "../../assets/images/patterns/pattern-2.jpg";
import feature_phone_1 from "../../assets/images/feature-section-1-phone.png";
import feature_image_1 from "../../assets/images/feature-section-1-img.jpg";
import feature_phone_2 from "../../assets/images/feature-section-2-phone.png";
import feature_image_2 from "../../assets/images/feature-section-2-img.jpg";
import artwork_left from "../../assets/images/Artwork-left.png";
import artwork_right from "../../assets/images/Artwork-right.png";

// data
import blog from "../data/blog";
import features from "../data/features";
import faq from "../data/faq";

const Index = () => {
  return (
    <>
      {/* hero - start */}
      <div className="hero hero-1">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-0 order-lg-1 col-10 offset-1 order-2">
                <div className="hero-content">
                  <h3 className="c-dark">
                    1# India’s First Social Media Platform for Realtors &
                    Property Consultant
                  </h3>
                  <p className="large c-grey">
                    Introducing the No.1 Social Media Platform for Realtors &
                    Property Consultants - BrokerApp, meticulously crafted for
                    the exclusive use of real estate brokers and developers,
                    empowering your business with unparalleled efficiency.
                  </p>
                  <DownloadButton />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-0 order-lg-2 col-10 offset-1 order-1">
                <div className="hero-image">
                  <img
                    className="drop-shadow"
                    src={hero_phone}
                    alt="hero"
                    height={"50%"}
                    width={"60%"}
                  />
                  <div className="hero-absolute-image">
                    <img src={artwork} alt="artwork" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero - end */}

      {/* app feature - start */}
      <div className="app-feature app-feature-1">
        <div className="app-feature-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  heading="app features"
                  subHeading="Get surprised by amazing features."
                  icon="las la-cog"
                  additionalClasses="center width-64"
                />
              </div>
            </div>
            <div className="row gx-5 gy-5">
              {features.map((element, key) => {
                return (
                  <div
                    className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-10 offset-1 hieghtOffeature"
                    key={key}
                  >
                    <AppFeatureSingle
                      icon={element.icon}
                      heading={element.heading}
                      excerpt={element.excerpt}
                      containerClass="app-feature-single-2"
                      link={element.to}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* app feature - end */}

      {/* video - start */}
      <div className="video-section">
        <div className="video-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-1 order-lg-1 col-10 offset-1 order-2">
                <div className="video-section-content">
                  <div className="section-heading section-heading-1 center-responsive c-white">
                    <div className="sub-heading upper ls-1">
                      <i className="las la-video"></i>
                      <h5>Your Network Is your Net-Worth</h5>
                    </div>
                    <div className="main-heading">
                      <h1>
                        BrokerApp is a fast and secure app that was built for
                        both Android and iOS platforms.
                      </h1>
                    </div>
                  </div>
                  <Button to="/contact" content="Get Started" type="button-1" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 order-lg-2 order-1">
                <div className="video-section-video">
                  <figure>
                    <img
                      className="drop-shadow-1"
                      src={video_img}
                      width="471"
                      height="472"
                      alt="drop-shadow"
                    />

                    <div className="play">
                      <VideoLightBox URL="https://m.youtube.com/watch?v=H2rWdM-_RTo&feature=youtu.be" />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className="background-pattern background-pattern-radius drop-shadow-1">
              <BackgroundAnimation />
              <div className="background-pattern-gradient"></div>
            </div>
          </div>
        </div>
      </div>
      {/* video - end */}

      {/* feature section - start */}
      <div className="feature-section feature-section-0 feature-section-spacing-1">
        <div className="feature-section-wrapper">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-7 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                <div className="feature-section-content">
                  <SectionHeading
                    icon="las la-cog"
                    heading="app features"
                    subHeading="BrokerApp Are Rich and full of features."
                  />
                  <p className="c-grey">
                    Reach a global audience of real estate experts under one
                    roof to grow your business to new heights
                  </p>
                  <br />
                  <br />
                  <ul>
                    <li>Build Solid Network of upto 1 Million Connections</li>
                    <li> Daily Listing of 2k+ Inventories.</li>
                    <li>
                      Access to 1K + Projects by renowned developers Globally.
                    </li>
                    <li> Access To Discounted Property Options.</li>
                    <li> Reward Points - Opportunity To Earn Mercedes</li>
                  </ul>

                  {/* <div className="icon-text-group">
                    <div className="icon-text">
                      <i className="las la-server"></i>
                      <h4 className="c-dark">Unlimited Storage</h4>
                      <p className="c-grey">
                        Heat multiply is second divided fowl there isn't man
                        cattle.
                      </p>
                    </div>
                    <div className="icon-text">
                      <i className="las la-user-shield"></i>
                      <h4 className="c-dark">Data Protection</h4>
                      <p className="c-grey">
                        Heat multiply is second divided fowl there isn't man
                        cattle.
                      </p>
                    </div>
                  </div> */}
                  {/* <Button to="/contact" content="Get Started" type="button-2" /> */}
                </div>
              </div>
              <div className="col-lg-5 offset-lg-0 order-lg-2 col-10 offset-1 order-1">
                <div className="feature-section-image">
                  <img
                    src={feature_image_1}
                    className="image"
                    alt="feature-fore"
                  />
                  <img src={hero_phone} className="phone" alt="phone" />
                  <div className="background-pattern background-pattern-radius">
                    <BackgroundAnimation />
                    <div className="background-pattern-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature section - end */}

      {/* feature section - start */}
      {/* <div className="feature-section feature-section-1 feature-section-spacing-2">
        <div className="feature-section-wrapper">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5 offset-lg-0 col-10 offset-1">
                <div className="feature-section-image">
                  <img
                    src={feature_image_2}
                    className="image"
                    alt="feature-fore"
                  />
                  <img src={feature_phone_2} className="phone" alt="phone" />
                  <div className="background-pattern background-pattern-radius-reverse">
                    <BackgroundAnimation />
                    <div className="background-pattern-gradient"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1">
                <div className="feature-section-content">
                  <SectionHeading
                    icon="las la-cog"
                    heading="app features"
                    subHeading="Rich and full of features."
                  />
                  <div className="icon-text-1-group">
                    <div className="icon-text-1">
                      <i className="las la-comments"></i>
                      <div>
                        <h4 className="c-dark">Video calls</h4>
                        <p className="c-grey">
                          He saw lesser whales man air. Seasons void fly
                          replenish man divided open fifth own fruitful.
                        </p>
                      </div>
                    </div>
                    <div className="icon-text-1">
                      <i className="las la-headset"></i>
                      <div>
                        <h4 className="c-dark">Private groups</h4>
                        <p className="c-grey">
                          Give whales creeping sixth. Blessed itself created dry
                          they're firmament face whose face lesser spirit day
                          dry.
                        </p>
                      </div>
                    </div>
                    <div className="icon-text-1">
                      <i className="las la-photo-video"></i>
                      <div>
                        <h4 className="c-dark">Cloud storage</h4>
                        <p className="c-grey">
                          Waters seasons of place likeness good day let they're
                          evening replenish years of over that.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button to="/contact" content="Get Started" type="button-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* feature section - end */}

      {/* pricing section - start */}
      {/* <div className="pricing-section">
        <div className="pricing-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <SectionHeading
                  icon="las la-tags"
                  heading="our app rates"
                  subHeading="Pricing plans for you."
                  additionalClasses="center c-white"
                  mainHeadingClass="c-white"
                  subHeadingClass="c-white"
                />
              </div>
            </div>
            <PricingSlider />
          </div>
          <div className="background-pattern background-pattern-1">
            <BackgroundAnimation />
            <div className="background-pattern-gradient"></div>
            <div className="background-pattern-bottom">
              <div
                className="image"
                style={{ backgroundImage: `url(${background_image_1})` }}
              ></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* pricing section - end */}

      {/* testimonial section - start */}
      <div className="testimonial-section">
        <div className="testimonial-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <SectionHeading
                  icon="las la-comments"
                  heading="feedbacks"
                  subHeading="What people are talking about."
                  additionalClasses="center width-55"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>
      {/* testimonial section - end */}

      {/* faq section - start */}
      {/* <div className="faq-section">
        <div className="faq-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  icon="las la-file-alt"
                  heading="discover"
                  subHeading="Some frequently asked questions"
                  additionalClasses="center width-64"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9 col-md-8 col-10">
                <div className="faq-wrapper">
                  <div className="faq" id="faq-accordion">
                    {faq.map((element, key) => {
                      return (
                        <div className="accordion-item" key={key}>
                          <div className="accordion-header" id={`faq-${key}`}>
                            <button
                              className={`accordion-button ${
                                key !== 1 ? "collapsed" : ""
                              }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq-collapse-${key}`}
                              aria-expanded={key === 1 ? "true" : "false"}
                              aria-controls={`faq-collapse-${key}`}
                            >
                              <span>{element.question}</span>
                            </button>
                          </div>
                          <div
                            id={`faq-collapse-${key}`}
                            className={`accordion-collapse collapse ${
                              key === 1 ? "show" : ""
                            }`}
                            aria-labelledby={`faq-${key}`}
                            data-bs-parent="#faq-accordion"
                          >
                            <div className="accordion-body">
                              <p>{element.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* faq section - end */}

      {/* screen section - start */}
      <div className="screen-section">
        <div className="screen-section-wrapper">
          <ScreenSlider />
          {/* screen section bottom - start */}
          <div className="screen-section-bottom">
            <div className="screen-section-bottom-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-0 col-10 offset-1">
                    <h1 className="c-white">
                      Download from both Android and iOS
                    </h1>
                    <h4 className="c-white">
                      <i
                        className="fas fa-smile"
                        style={{ marginRight: "1rem" }}
                      ></i>
                      3 Million users and counting!
                    </h4>
                  </div>
                  <div className="col-lg-4 offset-lg-0 col-10 offset-1">
                    <DownloadButton
                      groupType="download-button-1-group"
                      buttonType="download-button-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* screen section bottom - end */}
        </div>
        <div className="background-pattern background-pattern-2">
          <BackgroundAnimation />
          <div className="background-pattern-gradient"></div>
          <div className="background-pattern-bottom">
            <div
              className="image"
              style={{ backgroundImage: `url(${background_image_2})` }}
            ></div>
          </div>
        </div>
      </div>
      {/* screem section - end */}

      {/* blog section - start */}
      {/* <div className="blog-section">
        <div className="blog-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  icon="las la-bullhorn"
                  heading="recent news"
                  subHeading="Read latest news from our blog."
                  additionalClasses="center width-55"
                />
              </div>
            </div>
            <div className="row gx-5">
              {blog.slice(0, 3).map((element, key) => {
                return (
                  <div
                    key={key}
                    className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1"
                  >
                    <BlogSingle element={element} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
      {/* blog section - end */}

      {/* cta section - start */}
      {/* <div className="cta-section">
        <div className="cta-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <SectionHeading
                  icon="las la-cloud-download-alt"
                  heading="Download Orions"
                  subHeading="Join Orions and get 20% off on your selected plan."
                  additionalClasses="center width-71"
                />
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* cta section - end */}

      {/* contact form section - start */}
      <div className="contact-form-section contact-form-section-1">
        <div className="contact-form-section-wrapper">
          <div className="container">
            <div className="row gx-5 contact-form-section-row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                {/* contact form - start */}
                <ContactForm1 />
                {/* contact form - end */}
              </div>
              {/* <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1"> */}
              {/* newsletter form - start */}
              {/* <ContactForm2 /> */}
              {/* newsletter form - end */}
              {/* </div> */}
            </div>
          </div>
          <div className="contact-form-section-pattern">
            <div
              className="left"
              style={{ backgroundImage: `url(${artwork_left})` }}
            ></div>
            <div
              className="right"
              style={{ backgroundImage: `url(${artwork_right})` }}
            ></div>
          </div>
        </div>
      </div>
      {/* contact form section - end */}
    </>
  );
};

export default Index;
