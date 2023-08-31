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
                  <span>Customer Review </span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="RT1">
                Words from Our Happy Customers: Discover the Delight of Dining with Us!
At Sul Me  our passion is not only to serve exquisite dishes but to create unforgettable dining experiences.

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
                          <div className="Rv1">If There Were More Than 5 Stars I Would Definitely Like To Rate Than 5</div>
                          <div className="Rv2">
                            “If There Were More Than 5 Stars I Would Definitely Like To Rate Than 5, Such An Amazing Place Everything Was Nice Such As Food, Shesha, Highley Recommended “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                            Farooq Ahmad
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
                          <div className="Rv1">Good pricees, yummy food and perfect</div>
                          <div className="Rv2">
                            “Good pricees, yummy food and perfect presentation of dishes, also for shisha lovers it's good fruitful flavor.“
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                            Firas Altaweel
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
                          <div className="Rv1">Amazing place with fantastic</div>
                          <div className="Rv2">
                            “Amazing place with fantastic and variate cuisine! Great and friendly staff!  Highly reccomend! Once visited definitely you will cone again and again! “
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                            Mr. K
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
                          <div className="Rv1">Good for business meetings</div>
                          <div className="Rv2">
                            “They renovated the place it looks amazing now and the service is amazing.
Good for business meetings“
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                            Roy Saloum
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
                          <div className="Rv1">This is one of our family's..</div>
                          <div className="Rv2">
                            “This is one of our family's regular spot for a shisha. We like it very much and the staff are also very good.“
                          </div>
                          <div className="ReviewAddress">
                            <div className="Rname text-uppercase">
                            Sadeesh Sadagopan
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
