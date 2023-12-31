import React from "react";
import Link from "next/link";
import Image from "next/image";

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
        <div
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
                    Follow us for mouthwatering food photos, special offers, and a taste of our vibrant dining experience 
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="InstaSliderBox">
        <div className="slider2">
          <div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="ProductCWrap1">
              <Slider {...settings}>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i1.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                    </a>
                    
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                     <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i2.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span>
                      </a>
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i3.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span></a>
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i4.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span></a>
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i1.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span></a>
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i2.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span></a>
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i3.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span></a>
                  </div>
                </div>
                <div className="InstaSliderItem position-relative">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <a href="https://www.instagram.com/sulmeae/" target="_blank">
                    <Image
                        src="/i4.jpg"
                        layout="responsive"
                        width={"400"}
                        height={"449"}
                        className="ProductImage"
                      />
                      <span className="WaterMark1">&nbsp;</span></a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>;
};

export default InstagramComponent;
