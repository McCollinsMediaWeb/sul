import React , {useState} from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const PersonalizedServices = () => {
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
  return (
    <div className="pd-common bg1 HomeMenuBox position-relative PersonalizedServicesBox">
      <div>
        <div className="container slider1">
          <div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <div className="cusienBoxHdr">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="cusienBoxHdr1 text-uppercase">
                    <span>Personalized Service</span>
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
            <div className="ProductCWrap1">
              <Slider {...settings}>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p1.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p2.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p3.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p1.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p2.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p3.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p1.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p2.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SliderItem1">
                  <div className="SliderWrt1">
                    <div className="Product box-shadow" onClick={() => setOpen(true)}>
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/p3.jpg"
                          layout="responsive"
                          width={"383"}
                          height={"382"}
                          className="ProductImage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div class="MobCenter">
                <a class="T7" href="javascript:void(0);" onClick={() => setOpen(true)}>
                  Explore More
                </a>
              </div>
              <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        plugins={[Thumbnails]}
                        slides={[
                          { src: "/p1.jpg" },
                          { src: "/p2.jpg" },
                          { src: "/p3.jpg" },
                          { src: "/p1.jpg" },
                          { src: "/p2.jpg" },
                          { src: "/p3.jpg" },
                        ]}
                      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedServices;
