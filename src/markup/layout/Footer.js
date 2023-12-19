import React from "react";

import { Link } from "react-router-dom";

// images
import logo from "../../assets/images/logo.png";
import background_image_1 from "../../assets/images/patterns/pattern-1.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
              <div className="footer-row">
                <div className="footer-detail">
                  <Link to="#">
                    <img src={logo} alt="footer-logo" style={{ height: 70 }} />
                  </Link>
                  <p className="c-grey-1">
                    <h4 className="">Registered Office</h4>
                    6TH, OFFICE-05, UNIT NO-SB/C/61/, Sohna Bypass, M3M URBAN
                    SECTOR 67, Gurugram, Gurugram, Haryana, 122101
                  </p>
                  <div className="links">
                    <a
                      className="link-underline"
                      href="mailto:contact@brokerapp.com
                      "
                    >
                      <span>contact@brokerapp.com</span>
                    </a>
                    <a className="link-underline" href="tel:+91 9667599743">
                      <span>+91 9667599743</span>
                    </a>
                  </div>
                </div>
                <div className="footer-list footer-social social-gradient">
                  <h6>Follow</h6>
                  <ul>
                    <li className="twitter">
                      <Link
                        to="https://twitter.com/brokerappdotcom"
                        className="link-underline"
                      >
                        <i className="fab fa-twitter"></i>
                        <span>Twitter</span>
                      </Link>
                    </li>
                    <li className="facebook">
                      <Link
                        to="https://www.facebook.com/brokerappofficial"
                        className="link-underline"
                      >
                        <i className="fab fa-facebook"></i>
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li className="linkedin">
                      <Link
                        to="https://www.linkedin.com/company/brokerappofficial"
                        className="link-underline"
                      >
                        <i className="fab fa-linkedin-in"></i>
                        <span>Linkedin</span>
                      </Link>
                    </li>
                    <li className="Instagram">
                      <Link
                        to="https://instagram.com/brokerappofficial"
                        className="link-underline"
                      >
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                      </Link>
                    </li>
                    <li className="youtube">
                      <Link to="#" className="link-underline">
                        <i class="fab fa-youtube"></i>
                        <span>You Tube</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-list">
                  <h6>Menu</h6>
                  <ul>
                    <li>
                      <Link to="#" className="link-underline">
                        <span>About</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="link-underline">
                        <span>Our Team</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="link-underline">
                        <span>Features</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="link-underline">
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="link-underline">
                        <span>How It Works</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" className="link-underline">
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-list">
                  <h6>Explore</h6>
                  <ul>
                    <li>
                      <Link to="privacy-policy" className="link-underline">
                        <span>Terms & Conditions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="privacy-policy" className="link-underline">
                        <span>Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="link-underline">
                        <span>Help Center</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
              <div className="footer-copyright c-grey-1 mt-5 my-5">
                <h6>&copy; GFXPARTNER</h6>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div
          className="footer-pattern"
          style={{ backgroundImage: `url(${background_image_1})` }}
        ></div> */}
      </div>
      <h6 className="mt-5" style={{ marginLeft: 570 }}>
        &copy; 2023 Copyright Being Tech Life Style Pvt Ltd | All Rights
        Reserved
      </h6>
    </footer>
  );
};

export default Footer;
