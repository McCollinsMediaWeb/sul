import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const HomeCusience = () => {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    adaptiveHeight: false,
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
    <div className="pd-common bg1 cusienBox">
      <div className="container">
        <div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true}}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="cusienBoxHdr">
            <div className="row">
              <div className="col-md-4">
                <div className="cusienBoxHdr1 text-uppercase">
                  <span>Our CUISINES</span>
                </div>
              </div>
              <div className="col-md-8 color-fff">
                <div className="cusienBoxHdr2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidition ullamco laboris nisi ut aliquip
                  ex ea commodo condor consectetur adipiscing.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider2">
          <div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="ProductCWrap1">
              <Slider {...settings}>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/menu/c11.jpg"
                        layout="responsive"
                        width={"257"}
                        height={"358"}
                        className="ProductImage"
                      />
                      <div className="PromotionalBlockContent">
                        <div className="width-full">
                          <div className="row">
                            <div className="col-md-5">&nbsp;</div>
                            <div className="col-md-7">
                              <div className="text-right">
                                <div className="PTxt1">Middle Eastern</div>
                                <div className="PTxt2 color-fff">
                                  ON FIRST ORDER
                                </div>
                                <div className="PTxt3 color-fff">25% OFF</div>
                                <Link href={"/"} className="AddToCartAction1">
                                  Order Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/menu/c22.jpg"
                        layout="responsive"
                        width={"257"}
                        height={"358"}
                        className="ProductImage"
                      />
                      <div className="PromotionalBlockContent">
                        <div className="width-full">
                          <div className="row">
                            <div className="col-md-5">&nbsp;</div>
                            <div className="col-md-7">
                              <div className="text-right">
                                <div className="PTxt1">Middle Eastern</div>
                                <div className="PTxt2 color-fff">
                                  ON FIRST ORDER
                                </div>
                                <div className="PTxt3 color-fff">25% OFF</div>
                                <Link href={"/"} className="AddToCartAction1">
                                Order Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/menu/c3.jpg"
                        layout="responsive"
                        width={"257"}
                        height={"358"}
                        className="ProductImage"
                      />
                      <div className="PromotionalBlockContent">
                        <div className="width-full">
                          <div className="row">
                            <div className="col-md-5">&nbsp;</div>
                            <div className="col-md-7">
                              <div className="text-right">
                                <div className="PTxt1">Middle Eastern</div>
                                <div className="PTxt2 color-fff">
                                  ON FIRST ORDER
                                </div>
                                <div className="PTxt3 color-fff">25% OFF</div>
                                <Link href={"/"} className="AddToCartAction1">
                                Order Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/menu/c11.jpg"
                        layout="responsive"
                        width={"257"}
                        height={"358"}
                        className="ProductImage"
                      />
                      <div className="PromotionalBlockContent">
                        <div className="width-full">
                          <div className="row">
                            <div className="col-md-5">&nbsp;</div>
                            <div className="col-md-7">
                              <div className="text-right">
                                <div className="PTxt1">Middle Eastern</div>
                                <div className="PTxt2 color-fff">
                                  ON FIRST ORDER
                                </div>
                                <div className="PTxt3 color-fff">25% OFF</div>
                                <Link href={"/"} className="AddToCartAction1">
                                Order Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/menu/c22.jpg"
                        layout="responsive"
                        width={"257"}
                        height={"358"}
                        className="ProductImage"
                      />
                      <div className="PromotionalBlockContent">
                        <div className="width-full">
                          <div className="row">
                            <div className="col-md-5">&nbsp;</div>
                            <div className="col-md-7">
                              <div className="text-right">
                                <div className="PTxt1">Middle Eastern</div>
                                <div className="PTxt2 color-fff">
                                  ON FIRST ORDER
                                </div>
                                <div className="PTxt3 color-fff">25% OFF</div>
                                <Link href={"/"} className="AddToCartAction1">
                                Order Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/menu/c3.jpg"
                        layout="responsive"
                        width={"257"}
                        height={"358"}
                        className="ProductImage"
                      />
                      <div className="PromotionalBlockContent">
                        <div className="width-full">
                          <div className="row">
                            <div className="col-md-5">&nbsp;</div>
                            <div className="col-md-7">
                              <div className="text-right">
                                <div className="PTxt1">Middle Eastern</div>
                                <div className="PTxt2 color-fff">
                                  ON FIRST ORDER
                                </div>
                                <div className="PTxt3 color-fff">25% OFF</div>
                                <Link href={"/"} className="AddToCartAction1">
                                Order Now
                                </Link>
                              </div>
                            </div>
                          </div>
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
  );
};

export default HomeCusience;
