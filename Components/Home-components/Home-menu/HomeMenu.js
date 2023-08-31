import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const HomeMenu = () => {
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
    <div className="pd-common bg1 HomeMenuBox position-relative">
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
            <div className="Header1 text-center">
              <div className="Header1Txt color-fff text-uppercase">
                <span>Our Menu</span>
              </div>
            </div>
            <div className="Header2 text-center color-fff">
            With our delectable Middle Eastern menu, you can immerse yourself in a world of flavors. 
            </div>
            <div className="ProductCWrap1">
              <Slider {...settings}>
                <div className="SliderItem1">
                  <div
                    className="SliderWrt1"
                    {...animation}
                    viewport={{ once: true }}
                  >
                    <div className="Product box-shadow">
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/menu/22.jpg"
                          layout="responsive"
                          width={"257"}
                          height={"358"}
                          className="ProductImage"
                        />
                        <div className="Ptop">
                          <div></div>
                        </div>
                        <div className="PBottom">
                          <div>
                            <div className="PBottomC">
                              <div className="PBottomCL color-fff">
                                <div>
                                  <div class="PrdName">Product Name</div>
                                  <div class="PrdPrice">Price in  AED</div>
                                </div>
                              </div>
                              <div className="PBottomCR">
                                <Link href={"/reservation"} className="AddToCartAction">
                                  Reserve Now
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
                    viewport={{ once: true }}
                  >
                    <div className="Product box-shadow">
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/menu/33.jpg"
                          layout="responsive"
                          width={"257"}
                          height={"358"}
                          className="ProductImage"
                        />
                        <div className="Ptop">
                          <div></div>
                        </div>
                        <div className="PBottom">
                          <div>
                            <div className="PBottomC">
                              <div className="PBottomCL color-fff">
                                <div>
                                  <div class="PrdName">Product Name</div>
                                  <div class="PrdPrice">Price in  AED</div>
                                </div>
                              </div>
                              <div className="PBottomCR">
                                <Link href={"/reservation"} className="AddToCartAction">
                                  Reserve Now
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
                    viewport={{ once: true }}
                  >
                    <div className="Product box-shadow">
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/menu/44.jpg"
                          layout="responsive"
                          width={"257"}
                          height={"358"}
                          className="ProductImage"
                        />
                        <div className="Ptop">
                          <div></div>
                        </div>
                        <div className="PBottom">
                          <div>
                            <div className="PBottomC">
                              <div className="PBottomCL color-fff">
                                <div>
                                  <div class="PrdName">Product Name</div>
                                  <div class="PrdPrice">Price in  AED</div>
                                </div>
                              </div>
                              <div className="PBottomCR">
                                <Link href={"/reservation"} className="AddToCartAction">
                                  Reserve Now
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
                    viewport={{ once: true }}
                  >
                    <div className="Product box-shadow">
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/menu/55.jpg"
                          layout="responsive"
                          width={"257"}
                          height={"358"}
                          className="ProductImage"
                        />
                        <div className="Ptop">
                          <div></div>
                        </div>
                        <div className="PBottom">
                          <div>
                            <div className="PBottomC">
                              <div className="PBottomCL color-fff">
                                <div>
                                  <div class="PrdName">Product Name</div>
                                  <div class="PrdPrice">Price in  AED</div>
                                </div>
                              </div>
                              <div className="PBottomCR">
                                <Link href={"/reservation"} className="AddToCartAction">
                                  Reserve Now
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
                    viewport={{ once: true }}
                  >
                    <div className="Product box-shadow">
                      <div className="ProductGrid position-relative">
                        <Image
                          src="/menu/66.jpg"
                          layout="responsive"
                          width={"257"}
                          height={"358"}
                          className="ProductImage"
                        />
                        <div className="Ptop">
                          <div></div>
                        </div>
                        <div className="PBottom">
                          <div>
                            <div className="PBottomC">
                              <div className="PBottomCL color-fff">
                                <div>
                                  <div class="PrdName">Product Name</div>
                                  <div class="PrdPrice">Price in  AED</div>
                                </div>
                              </div>
                              <div className="PBottomCR">
                                <Link href={"/reservation"} className="AddToCartAction">
                                  Reserve Now
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
              <div class="MobCenter">
              <Link class="T7" href={"/menu"}>View Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
