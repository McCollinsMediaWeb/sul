import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const GalleryBox = () => {
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
    slidesToShow: 5,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="ReviewBox pd-common GalleryBox PdArg1 GalleryMenuBg2">
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
                  <span>Explore Our Gallery </span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="RT1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidition ullamco laboris nisi ut aliquip
                  ex ea commodo condor .
                </div>
                <div className="RT2">Food Lovers Showcase</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/3.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Out Door</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/1.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Indoor Photos</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/2.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Our Salads</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/3.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Our Starters</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/4.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Desserts</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/3.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Out Door</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/1.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Indoor Photos</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/2.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Our Salads</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/3.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Our Starters</div>
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
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/4.jpg"
                              layout="responsive"
                              width={"257"}
                              height={"358"}
                              className="GalleryItemImage"
                            />
                          </div>
                          <div className="GalleryItemName">Desserts</div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="GalleryImages">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/1.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/2.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/3.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/4.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/1.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/2.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/3.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/4.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/1.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/2.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/3.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/4.jpg"
                      layout="responsive"
                      width={"257"}
                      height={"358"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
