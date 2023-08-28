import { useState, React } from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
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
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="ReviewBox pd-common GalleryBox PdArg1 GalleryMenuBg2">
      <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Thumbnails]}
          slides={[
            { src: "/menu/g1.jpg" },
            { src: "/menu/g2.jpg" },
            { src: "/menu/g3.jpg" },
            { src: "/menu/g4.jpg" },
            { src: "/menu/g5.jpg" },
            { src: "/menu/g6.jpg" },
            { src: "/menu/g7.jpg" },
            { src: "/menu/g8.jpg" },
            { src: "/menu/g9.jpg" },
            { src: "/menu/g10.jpg" },
            { src: "/menu/g11.jpg" },
            { src: "/menu/g12.jpg" },
            { src: "/menu/g13.jpg" },
            { src: "/menu/g14.jpg" },
            { src: "/menu/g15.jpg" },
            { src: "/menu/g16.jpg" },
            { src: "/menu/g17.jpg" },
            { src: "/menu/g18.jpg" },
            { src: "/menu/g19.jpg" },
            { src: "/menu/g20.jpg" },

          ]}
        />
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
                Embark on a virtual culinary adventure as we unveil the essence of Middle Eastern cuisine like never before
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
          <div className="ReviewsWrap position-relative GalleryFilterBox">
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
                        <div className="ReviewItemBoxItem active">
                          <div className="GalleryItem1">
                            <Image
                              src="/menu/g1.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g2.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g3.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g4.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g5.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g6.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g7.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g8.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g9.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
                              src="/menu/g10.jpg"
                              layout="responsive"
                              width={"411"}
                              height={"449"}
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
              <div className="col-md-3"  onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/i1.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/i2.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/i3.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/i4.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g1.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g2.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g3.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g4.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g5.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g6.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g7.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g20.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g9.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g10.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g11.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g12.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g13.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g14.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g15.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g16.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g17.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g18.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g19.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
                      className="GalleryItemImage"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3" onClick={() => setOpen(true)}>
                <div
                  className="SliderWrt1"
                  {...animation}
                  viewport={{ once: true }}
                >
                  <div className="GalleryImage">
                    <Image
                      src="/menu/g20.jpg"
                      layout="responsive"
                      width={"411"}
                      height={"449"}
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
