import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
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
  return (
    <>
      <div className="bg1 pd-common HomeAbtBox pb-0 abtBoxT">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="T5 text-uppercase text-center">
                  <span>About US</span>
                </div>
                <div className="T6 color-fff">
                At Sul Me, we take pride in offering you an unforgettable culinary journey through the heart of the Middle East. Our restaurant is more than just a place to dine; it's an experience that transports you to the rich and diverse flavors of the region
                </div>
                <Link href={"/about"} className="T7">
                  About Us
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image-container"
                initial={{ rotate: 5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/homeabout.jpg"
                  layout="responsive"
                  width={"577"}
                  height={"316"}
                  className="HomeAbtImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
