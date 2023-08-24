import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const HomeReviews = () => {
  const animation = {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      slideStart: {
        clipPath: "circle(11.6% at 100% 100%)",
      },
      slideEnd: {
        clipPath: "circle(141.4% at 100% 100%)",
      },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    transition: { type: "tween", duration: 1.5 },
  };
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="ReviewBox pd-common">
      <div className="container">
        
          <div className="ReviewBoxHdr">
          <div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
            <div className="row">
              <div className="col-md-4">
                <div className="RvHeading">
                  <span>Our Happy customers </span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="RT1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidition ullamco laboris nisi ut aliquip
                  ex ea commodo condor .
                </div>
                <div className="RT2">Food Lovers Feedback</div>
                <div className="RT3">
                  <div className="StarItems">
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        
        <div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <div className="ReviewsWrap position-relative">
            <div className="slider2">
              <div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="ProductCWrap1">
                  <Slider {...settings}>
                    <div className="ReviewItemBox">
                      <div
                        className="SliderWrt1"
                        {...animation}
                        viewport={{ once: true }}
                      >
                        <div className="ReviewItemBoxItem">
                          <div className="Rv1">Lorem ipsum dolo</div>
                          <div className="Rv2">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                              Ali Mohammad
                            </div>
                            <div className="RLocation text-uppercase">
                              Dubai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ReviewItemBox">
                      <div
                        className="SliderWrt1"
                        {...animation}
                        viewport={{ once: true }}
                      >
                        <div className="ReviewItemBoxItem">
                          <div className="Rv1">Lorem ipsum dolo</div>
                          <div className="Rv2">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                              Ali Mohammad
                            </div>
                            <div className="RLocation text-uppercase">
                              Dubai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ReviewItemBox">
                      <div
                        className="SliderWrt1"
                        {...animation}
                        viewport={{ once: true }}
                      >
                        <div className="ReviewItemBoxItem">
                          <div className="Rv1">Lorem ipsum dolo</div>
                          <div className="Rv2">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                              Ali Mohammad
                            </div>
                            <div className="RLocation text-uppercase">
                              Dubai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ReviewItemBox">
                      <div
                        className="SliderWrt1"
                        {...animation}
                        viewport={{ once: true }}
                      >
                        <div className="ReviewItemBoxItem">
                          <div className="Rv1">Lorem ipsum dolo</div>
                          <div className="Rv2">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                              Ali Mohammad
                            </div>
                            <div className="RLocation text-uppercase">
                              Dubai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ReviewItemBox">
                      <div
                        className="SliderWrt1"
                        {...animation}
                        viewport={{ once: true }}
                      >
                        <div className="ReviewItemBoxItem">
                          <div className="Rv1">Lorem ipsum dolo</div>
                          <div className="Rv2">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                              Ali Mohammad
                            </div>
                            <div className="RLocation text-uppercase">
                              Dubai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
