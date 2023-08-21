import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";

const InstagramComponent = () => {
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
        slidesToShow: 4,
        slidesToScroll: 2,
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
  return <div className="pd-common bg-2 instagramBox">
    <div className="container">
        <div className="InstaHead">
        <motion.div
              className="SliderWrt1"
              {...animation}
              viewport={{ once: true }}
            >
            <div className="row">
                <div className="col-md-4">
                    <div className="InstraaLftBox">
                        <div className="InstraaLftBoxL">
                            <span className="InstaIcon">&nbsp;</span>
                        </div>
                        <div className="InstraaLftBoxR">#connectsulmeae</div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="InstaT3 color-fff">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
        <div className="InstaSliderBox">
        <div className="slider2">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="ProductCWrap1">
              <Slider {...settings}>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i1.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i2.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i3.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i4.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i1.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i2.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i3.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <motion.div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <Image
                        src="/i4.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                  </motion.div>
                </div>
              </Slider>
            </div>
          </motion.div>
        </div>
        </div>
    </div>
  </div>;
};

export default InstagramComponent;
