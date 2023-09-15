import React , {useState} from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const InHouse = () => {
    const [open, setOpen] = useState(false);
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
    <div className="pd-common bg-2 inHouse">
      <div className="container">
        <div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true}}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="Header1 text-center">
              <div className="Header1Txt color-fff text-uppercase">
                <span> In-House & On-Site Catering Services</span>
              </div>
            </div>
            <div className="Header2 text-center color-fff">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
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
                <div className="SliderItem1"  onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/c1.jpg"
                        layout="responsive"
                        width={"476"}
                        height={"245"}
                        className="ProductImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/c2.jpg"
                        layout="responsive"
                        width={"476"}
                        height={"245"}
                        className="ProductImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/c3.jpg"
                        layout="responsive"
                        width={"476"}
                        height={"245"}
                        className="ProductImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/c2.jpg"
                        layout="responsive"
                        width={"476"}
                        height={"245"}
                        className="ProductImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/c3.jpg"
                        layout="responsive"
                        width={"476"}
                        height={"245"}
                        className="ProductImage"
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        plugins={[Thumbnails]}
                        slides={[
                          { src: "/c1.jpg" },
                          { src: "/c2.jpg" },
                          { src: "/c3.jpg" },
                          { src: "/c1.jpg" },
                          { src: "/c2.jpg" },
                          { src: "/c3.jpg" },
                        ]}
                      />
    </div>
  );
};

export default InHouse;
