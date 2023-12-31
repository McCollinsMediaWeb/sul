import { useState, React } from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const AboutGallery = () => {
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
        centerMode: true,
        adaptiveHeight: true,
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
      const [open, setOpen] = useState(false);
  return <div className="GalleryBox bg1">
    <div className="AbtGallery container">
    <div className="slider2">
          <div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="ProductCWrap1">
              <Slider {...settings}>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/behind-the-scene/thumb/11.jpg"
                        layout="responsive"
                        width={"388"}
                        height={"479"}
                        className="ProductImage"
                      /> 
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/behind-the-scene/thumb/22.jpg"
                        layout="responsive"
                        width={"388"}
                        height={"479"}
                        className="ProductImage"
                      /> 
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/behind-the-scene/thumb/33.jpg"
                        layout="responsive"
                        width={"388"}
                        height={"479"}
                        className="ProductImage"
                      /> 
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/behind-the-scene/thumb/44.jpg"
                        layout="responsive"
                        width={"388"}
                        height={"479"}
                        className="ProductImage"
                      /> 
                    </div>
                  </div>
                </div>
                <div className="SliderItem1" onClick={() => setOpen(true)}>
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true}}
                  >
                    <div className="PromotionalBlock position-relative">
                      <Image
                        src="/behind-the-scene/thumb/55.jpg"
                        layout="responsive"
                        width={"388"}
                        height={"479"}
                        className="ProductImage"
                      /> 
                    </div>
                  </div>
                </div>
                
              </Slider>
            </div>
          </div>
          <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Thumbnails]}
          slides={[
            { src: "/behind-the-scene/full/11.jpg" },
            { src: "/behind-the-scene/full/22.jpg" },
            { src: "/behind-the-scene/full/33.jpg" },
            { src: "/behind-the-scene/full/44.jpg" },
            { src: "/behind-the-scene/full/55.jpg" },
          ]}
        />
        </div>
    </div>
  </div>;
};

export default AboutGallery;
